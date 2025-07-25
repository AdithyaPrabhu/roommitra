const { HOTEL_NAME } = require("./Hotel.constants.js");

const languageStrings = {
    'en': {
        translation: {
            LaunchRequestHandler_WelcomeMsg: `Hello, Welcome to ${HOTEL_NAME}. How can I help you?`,
            ErrorHandler_Prompt: 'Sorry, I don\'t understand your command. Please say it again.',
            ErrorHandler_Reprompt: ' Sorry, I don\'t understand your command. Please say it again.',
            HelpIntentHandler_HelpText: ' You can ask me the weather!',
            HelpIntentHandler_HelpTextDesc: ' DESC : You can ask me the weather!',
            CancelAndStopIntentHandler_short: ' Goodbye!',
            CancelAndStopIntentHandler_Desc: ' Goodbye!!!',
            RedgisterDeviceHandler_DeviceRegistered: ' Device Registered Successfully',
            HouseKeepingDentalKitHandlerConfirmRequest: ' Dental Kit is on it\'s way to your room',
            HouseKeepingToiletriesHandlerConfirmRequest: ' Toiletries is on it\'s way to your room',
            HouseKeepingRoomCleanHandlerConfirmRequest: ' Sending someone to clean your room',
            HouseKeepingBeddingHandlerConfirmRequest: ' Absolutely! I will have it delivered to your room! Sweet Dreams',
            HouseKeepingTowelsHandlerConfirmRequest: ' Absolutely! I will have it delivered to your room!',
            HouseKeepingLaundryHandlerConfirmRequest: 'Sure! Sending someone to pick up your laundry',
            HouseKeepingIronBoxHandlerConfirmRequest: "Sure! Sending someone to your room right away!",
            HouseKeepingIceCubesHandlerConfirmRequest: "Ice Cubes is on it's way to your room",
            HouseKeepingShoeShineKitHandlerConfirmRequest: "Shoe Shine Kit is on it's way to your room"
        }
    },
    'hi': {
        translation: {
            LaunchRequestHandler_WelcomeMsg: `Hindi : Welcome to ${HOTEL_NAME}. How can I help you?`,
            ErrorHandler_Prompt: 'Hindi : Sorry, I don\'t understand your command. Please say it again.',
            ErrorHandler_Reprompt: 'Hindi : Sorry, I don\'t understand your command. Please say it again.',
            HelpIntentHandler_HelpText: 'Hindi: You can ask me the weather!',
            HelpIntentHandler_HelpTextDesc: 'Hindi: DESC : You can ask me the weather!',
            CancelAndStopIntentHandler_short: 'Hindi : Goodbye!',
            CancelAndStopIntentHandler_Desc: 'Hindi: Goodbye!!!',
            RedgisterDeviceHandler_DeviceRegistered: 'Hindi: Device Registered Successfully',
            HouseKeepingDentalKitHandlerConfirmRequest: 'Hindi: Dental Kit is on it\'s way to your room',
            HouseKeepingToiletriesHandlerConfirmRequest: 'Hindi: Toiletries is on it\'s way to your room',
            HouseKeepingRoomCleanHandlerConfirmRequest: 'Hindi: Sending someone to clean your room',
            HouseKeepingBeddingHandlerConfirmRequest: 'Hindi: Absolutely! I will have it delivered to your room! Sweet Dreams',
            HouseKeepingTowelsHandlerConfirmRequest: ' Hindi:Absolutely! I will have it delivered to your room!',
            HouseKeepingLaundryHandlerConfirmRequest: 'Hindi:Sure! Sending someone to pick up your laundry',
            HouseKeepingIronBoxHandlerConfirmRequest: "Hindi:Sure! Sending someone to your room right away!",
            HouseKeepingIceCubesHandlerConfirmRequest: "Hindi : Ice Cubes is on it's way to your room",
            HouseKeepingShoeShineKitHandlerConfirmRequest: "Hindi : Shoe Shine Kit is on it's way to your room"




        }
    }
}


module.exports = {
    languageStrings
}