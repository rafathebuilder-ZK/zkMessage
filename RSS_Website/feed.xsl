<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" encoding="UTF-8" indent="yes"/>
    
    <xsl:template match="/">
        <html>
            <head>
                <title>RSS Feed</title>
                <style>
                    body {
                        background-color: black; /* Set background to black */
                        color: white; /* Set text color to white for contrast */
                        font-family: Arial, sans-serif; /* Set font */
                    }
                    h1 {
                        text-align: center; /* Center the header */
                        font-size: 2em; /* Increase header size */
                    }
                </style>
            </head>
            <body>
                <h1>ZK is the Endgame</h1> <!-- Snazzy header -->
                <xsl:apply-templates select="rss/channel/item"/>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="item">
        <div>
            <h2><xsl:value-of select="title"/></h2>
            <p><xsl:value-of select="description"/></p>
            <p><xsl:value-of select="link"/></p>
            <hr/>
        </div>
    </xsl:template>
</xsl:stylesheet>
