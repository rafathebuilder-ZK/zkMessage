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
                        font-family: monospace; /* Set font */
                    }
                    h1 {
                        <!-- text-align: center; /* Center the header */ -->
                        font-size: 2em; /* Increase header size */
                    }
                    pre {
                        font-family: monospace; /* Use monospace font for ASCII art */
                        white-space: pre; /* Preserve whitespace */
                        <!-- text-align: center; /* Center the ASCII art */ -->
                        overflow-x: auto; /* Allow horizontal scrolling if needed */
                        width: 100%; /* Set width to 100% of the parent container */
                        max-width: 1000px; /* Set a maximum width to prevent stretching */
                        <!-- margin: 0 auto; /* Center the pre element */ -->
                    }
                </style>
            </head>
            <body>
                <pre>
:......:::::.......::::::...:::::........::..:::::..::..::::..::..:::::..
::::'#######::'##::: ##::'######::'##::::'##::::'###::::'####:'##::: ##:::::
:::'##.... ##: ###:: ##:'##... ##: ##:::: ##:::'## ##:::. ##:: ###:: ##::::::
::: ##:::: ##: ####: ##: ##:::..:: ##:::: ##::'##:. ##::: ##:: ####: ##:::::::
::: ##:::: ##: ## ## ##: ##::::::: #########:'##:::. ##:: ##:: ## ## ##::::::::::
::: ##:::: ##: ##. ####: ##::::::: ##.... ##: #########:: ##:: ##. ####:::::::::::::
::: ##:::: ##: ##:. ###: ##::: ##: ##:::: ##: ##.... ##:: ##:: ##:. ###:::::::::::::::::::
:::. #######:: ##::. ##:. ######:: ##:::: ##: ##:::: ##:'####: ##::. ##:::::::::::::::::::::::::
::::::.......:::..::::..:::......:::..:::::..::..:::::..::....::..::::..::::::::::::::::::::::::::::::::
::::'######::::'#######::'##::::'##:'########:'########::'##::: ##::::'###::::'##::: ##::'######::'########:::
:::'##... ##::'##.... ##: ##:::: ##: ##.....:: ##.... ##: ###:: ##:::'## ##::: ###:: ##:'##... ##: ##.....::::
::: ##:::..::: ##:::: ##: ##:::: ##: ##::::::: ##:::: ##: ####: ##::'##:. ##:: ####: ##: ##:::..:: ##:::::::::
::: ##::'####: ##:::: ##: ##:::: ##: ######::: ########:: ## ## ##:'##:::. ##: ## ## ##: ##::::::: ######:::::
::: ##::: ##:: ##:::: ##:. ##:: ##:: ##...:::: ##.. ##::: ##. ####: #########: ##. ####: ##::::::: ##...::::::
::: ##::: ##:: ##:::: ##::. ## ##::: ##::::::: ##::. ##:: ##:. ###: ##.... ##: ##:. ###: ##::: ##: ##:::::::::
:::. ######:::. #######::::. ###:::: ########: ##:::. ##: ##::. ##: ##:::: ##: ##::. ##:. ######:: ########:::
:......:::::.......::::::...:::::........::..:::::..::..::::..::..:::::..::..::::..:::......:::........:::::::
                </pre>
                <xsl:apply-templates select="rss/channel/item"/>
                <h1>ZK is the Endgame</h1> <!-- Snazzy header -->
            </body>
        </html>
    </xsl:template>

    <xsl:template match="item">
            <div>
            <xsl:text>&#10;</xsl:text> <!-- New line -->
            <xsl:text>Message: </xsl:text>
            <xsl:value-of select="description"/>
            </div>
            <div>
            <div>
            <xsl:text>Author: </xsl:text>
            <xsl:value-of select="title"/>
            </div>
            <xsl:text>&#10;</xsl:text> <!-- New line -->
            <xsl:text>Link: </xsl:text>
            <xsl:value-of select="link"/>
            <xsl:text>&#10;</xsl:text> <!-- New line -->
            </div>
            <div>
            <xsl:text>-------------------------</xsl:text>
            <xsl:text>&#10;</xsl:text> <!-- New line -->
        </div>
    </xsl:template>
</xsl:stylesheet>
