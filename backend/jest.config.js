"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'js', 'json'],
    testRegex: '.*\\.spec\\.ts$',
    collectCoverageFrom: ['**/*.{ts,js}'],
    coverageDirectory: './coverage',
    testPathIgnorePatterns: ['/node_modules/'],
};
exports.default = config;
//# sourceMappingURL=jest.config.js.map