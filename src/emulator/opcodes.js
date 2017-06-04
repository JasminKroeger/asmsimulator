app.service('opcodes', [function() {
    var opcodes = {
        NONE: 0,
        MOV_REG_TO_REG: 1,
        MOV_ADDRESS_TO_REG: 2,
        MOV_REGADDRESS_TO_REG: 3,
        MOV_REG_TO_ADDRESS: 4,
        MOV_REG_TO_REGADDRESS: 5,
        MOV_NUMBER_TO_REG: 6,
        MOV_NUMBER_TO_ADDRESS: 7,
        MOV_NUMBER_TO_REGADDRESS: 8,
        MOV_BYTE_REG_TO_REG: 9,
        MOV_BYTE_ADDRESS_TO_REG: 10,
        MOV_BYTE_REGADDRESS_TO_REG: 11,
        MOV_BYTE_REG_TO_ADDRESS: 12,
        MOV_BYTE_REG_TO_REGADDRESS: 13,
        MOV_BYTE_NUMBER_TO_REG: 14,
        MOV_BYTE_NUMBER_TO_ADDRESS: 15,
        MOV_BYTE_NUMBER_TO_REGADDRESS: 16,
        ADD_REG_TO_REG: 20,
        ADD_REGADDRESS_TO_REG: 21,
        ADD_ADDRESS_TO_REG: 22,
        ADD_NUMBER_TO_REG: 23,
        SUB_REG_FROM_REG: 24,
        SUB_REGADDRESS_FROM_REG: 25,
        SUB_ADDRESS_FROM_REG: 26,
        SUB_NUMBER_FROM_REG: 27,
        INC_REG: 28,
        DEC_REG: 29,
        CMP_REG_WITH_REG: 30,
        CMP_REGADDRESS_WITH_REG: 31,
        CMP_ADDRESS_WITH_REG: 32,
        CMP_NUMBER_WITH_REG: 33,
        JMP_REGADDRESS: 40,
        JMP_ADDRESS: 41,
        JC_REGADDRESS: 42,
        JC_ADDRESS: 43,
        JNC_REGADDRESS: 44,
        JNC_ADDRESS: 45,
        JZ_REGADDRESS: 46,
        JZ_ADDRESS: 47,
        JNZ_REGADDRESS: 48,
        JNZ_ADDRESS: 49,
        JA_REGADDRESS: 50,
        JA_ADDRESS: 51,
        JNA_REGADDRESS: 52,
        JNA_ADDRESS: 53,
        PUSH_REG: 60,
        PUSH_REGADDRESS: 61,
        PUSH_ADDRESS: 62,
        PUSH_NUMBER: 63,
        POP_REG: 64,
        CALL_REGADDRESS: 65,
        CALL_ADDRESS: 66,
        RET: 67,
        MUL_REG: 70,
        MUL_REGADDRESS: 71,
        MUL_ADDRESS: 72,
        MUL_NUMBER: 73,
        DIV_REG: 74,
        DIV_REGADDRESS: 75,
        DIV_ADDRESS: 76,
        DIV_NUMBER: 77,
        AND_REG_WITH_REG: 80,
        AND_REGADDRESS_WITH_REG: 81,
        AND_ADDRESS_WITH_REG: 82,
        AND_NUMBER_WITH_REG: 83,
        OR_REG_WITH_REG: 84,
        OR_REGADDRESS_WITH_REG: 85,
        OR_ADDRESS_WITH_REG: 86,
        OR_NUMBER_WITH_REG: 87,
        XOR_REG_WITH_REG: 88,
        XOR_REGADDRESS_WITH_REG: 89,
        XOR_ADDRESS_WITH_REG: 90,
        XOR_NUMBER_WITH_REG: 91,
        NOT_REG: 92,
        SHL_REG_WITH_REG: 100,
        SHL_REGADDRESS_WITH_REG: 101,
        SHL_ADDRESS_WITH_REG: 102,
        SHL_NUMBER_WITH_REG: 103,
        SHR_REG_WITH_REG: 104,
        SHR_REGADDRESS_WITH_REG: 105,
        SHR_ADDRESS_WITH_REG: 106,
        SHR_NUMBER_WITH_REG: 107
    };

    return opcodes;
}]);
