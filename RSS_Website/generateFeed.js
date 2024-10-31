const fs = require('fs');
const axios = require('axios');

const GRAPHQL_ENDPOINT = 'https://api.studio.thegraph.com/query/93251/zkmessage/version/latest';

async function fetchData() {
  const query = `
    {
      messageSents {
        id
        user
        tag
        message
        transactionHash
      }
      messengerApproveds {
        id
        user
        tag
        message
        transactionHash
      }
    }
  `;

  try {
    const response = await axios.post(GRAPHQL_ENDPOINT, { query });
    return {
      messageSents: response.data.data.messageSents,
      messengerApproveds: response.data.data.messengerApproveds,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

async function generateFeed() {
  const { messageSents, messengerApproveds } = await fetchData();

  // Combine both messageSents and messengerApproveds into a single array
  const items = [...messageSents, ...messengerApproveds];

  const feedItems = items.map(item => `
    <item>
      <title>${item.tag}</title>
      <link>https://explorer.zksync.io/tx/${item.transactionHash}</link> <!-- Adjust link as needed -->
      <description>${item.message}</description>
      <pubDate>${new Date().toUTCString()}</pubDate>
    </item>
  `).join('');

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>zkMessage RSS Feed</title>
    <link>https://explorer.zksync.io/address/0x5d89444f84d544deBbD13D672f314A4DfaE3f77C#events</link>
    <description>View events from zkMessage contract on zkSync</description>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${feedItems}
  </channel>
</rss>`;

  fs.writeFileSync('feed.xml', rssFeed);
  console.log('RSS feed generated successfully!');
}
// Check for new items every 10 minutes
setInterval(async () => {
  console.log('Checking for new items...');
  await generateFeed(); // This calls the generateFeed function every 10 minutes
}, 600000); // 600,000 milliseconds = 10 minutes

generateFeed();
