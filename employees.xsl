<?xml version="1.0" encoding="UTF-8"?> 
<xsl:stylesheet version="1.0" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"> 
 
    <xsl:template match="/"> 
        <html> 
        <head> 
            <title>Employee List</title> 
            <style> 
                table, th, td { border: 1px solid black; border-collapse: 
collapse; padding: 5px; } 
                th { background-color: #f2f2f2; } 
                .active { background-color: #c6efce; }   /* green */ 
                .inactive { background-color: #ffc7ce; } /* red */ 
            </style> 
        </head> 
        <body> 
            <h2>Employee Information</h2> 
            <table> 
                <tr> 
                    <th>ID</th> 
                    <th>Name</th> 
                    <th>Department</th> 
                    <th>Salary</th> 
                    <th>Active</th> 
                </tr> 
 
                <xsl:for-each select="employees/employee"> 
                    <tr> 
                        <xsl:attribute name="class"> 
                            <xsl:choose> 
                                <xsl:when 
test="active='true'">active</xsl:when> 
                                <xsl:otherwise>inactive</xsl:otherwise> 
                            </xsl:choose> 
                        </xsl:attribute> 
                        <td><xsl:value-of select="id"/></td> 
                        <td><xsl:value-of select="name"/></td> 
                        <td><xsl:value-of select="department"/></td> 
                        <td><xsl:value-of select="salary"/></td> 
                        <td><xsl:value-of select="active"/></td> 
                    </tr> 
                </xsl:for-each> 
                       </table> 
        </body> 
        </html> 
    </xsl:template> 
 
</xsl:stylesheet>