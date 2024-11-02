<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <head>
        <title>Your RSS Feed</title>
      </head>
      <body>
        <h1>Your RSS Feed Title</h1>
        <ul>
          <xsl:for-each select="rss/channel/item">
            <li>
              <a href="{link}">
                <xsl:value-of select="title"/>
              </a>
              <p><xsl:value-of select="description"/></p>
            </li>
          </xsl:for-each>
        </ul>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
