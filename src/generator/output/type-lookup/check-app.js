export default {
    "check": {
        "EchoArg": {
            "description": "EchoArg contains the arguments to be sent to the Dropbox servers.",
            "fields": [
                {
                    "description": "The string that you'd like to be echoed back to you.",
                    "parameter": "query",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "EchoResult": {
            "description": "EchoResult contains the result returned from the Dropbox servers.",
            "fields": [
                {
                    "description": "If everything worked correctly, this would be the same as query.",
                    "parameter": "result",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        }
    }
}
