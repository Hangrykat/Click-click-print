import React from 'react'
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer"

function Pdf({productName}) {
    // const {productName} = useContext(StateContext);
    console.log(productName)

    const styles = StyleSheet.create({
        page: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: 'solid black',
            borderWidth: 0.5,
            width: '50%',
            height: '80%'
        },
        section: {
            margin: 10,
            padding: 10,         
        }
      });
    return (
            <Document>
                <Page size="A4" style={styles.page}> 
                    <View style={styles.section}>
                        <Text>Insert Label:Object variable here</Text>
                    </View>
                    <View style={styles.section}>
                        <Text>{productName}</Text>
                    </View>
                </Page>
            </Document>
    )
}

export default Pdf
