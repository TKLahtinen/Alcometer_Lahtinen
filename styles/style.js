import { StyleSheet, StatusBar} from "react-native";

const brightBG = '#F2F2F2'
const darkBG = '#5F4A8C'
const brightText = '#5F4A8C'
const darkText = '#F2F2F2'
const brightButton = '#5F4A8C'
const darkButton = '#F2F2F2'


const brightStyle = StyleSheet.create({
    container: {
        backgroundColor: brightBG,
        flex: 1,
        marginTop: StatusBar.currentHeight + 5,
    },
    switchContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        margin: 10,
    },
    header: {
        flex: 1,
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        margin: 20,
        color: brightText,
    },
    label: {
        flex: 1,
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 15,
        marginTop: 20,
        color: brightText,
    },
    radioLabel: {
        color: brightText,
    },
    input: {
        flex: 1,
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 15,
        marginRight: 15,
        marginTop: 5,
        marginBottom: 5,
        borderWidth: 1,
        borderColor: brightButton,
        borderRadius: 10,
        padding: 5,
        color: brightText,
    },
    numInputContainer: {
        flex: 1,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 5,
        marginBottom: 5,
    },
    radioContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginLeft: 15,
        marginRight: 15,
        marginTop: 5,
        marginBottom: 5,
    },
    button: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 15,
        marginRight: 15,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: brightButton,
        borderRadius: 10,
        padding: 20,
    },
    buttonText: {
        flex: 1,
        fontSize: 20,
        fontWeight: "bold",
        color: darkText,
        textAlign: "center",
    },
    result: {
        flex: 1,
        fontSize: 20,
        fontWeight: "bold",
        margin: 15,
        textAlign: "center",
        color: brightText,
    },
    numInput: {
        totalWidth:240,
        totalHeight:50,
        iconSize:25,
        iconStyle:{ color: darkText },
        borderColor: brightButton,
        textColor: brightText,
        rightButtonBackgroundColor: brightButton,
        leftButtonBackgroundColor: brightButton,
        rounded: true,
    },
    statusbar: {
        backgroundColor: brightBG,
    },

        
});

const darkStyle = StyleSheet.create({
    ...brightStyle,
    container: {
        ...brightStyle.container,
        backgroundColor: darkBG,
    },
    header: {
        ...brightStyle.header,
        color: darkText,
    },
    label: {
        ...brightStyle.label,
        color: darkText,
    },
    radioLabel: {
        ...brightStyle.radioLabel,
        color: darkText,
    },
    input: {
        ...brightStyle.input,
        backgroundColor: darkButton,
        borderColor: darkButton,
    },
    button: {
        ...brightStyle.button,
        backgroundColor: darkButton,
    },
    buttonText: {
        ...brightStyle.buttonText,
        color: brightText,
    },
    result: {
        ...brightStyle.result,
        color: darkText,
    },
    numInput: {
        ...brightStyle.numInput,
        iconStyle:{ color: darkText },
        borderColor: '#B294F2',
        textColor: darkText,
        rightButtonBackgroundColor: '#976DF2',
        leftButtonBackgroundColor: '#976DF2',
        backgroundColor: darkButton,
    },
    
});

export { brightStyle, darkStyle };

