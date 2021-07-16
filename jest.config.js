module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      'ts-config': 'tsconfig.jest.json',
    },
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: ['**/__test__/**/*.test.ts'],
  moduleNameMapper: {
    // tsconfig.jsonのbaseUrl, pathsと対応させる
    '^@routes/(.*)$': '<rootDir>/src/routes/$1',
    '^@controller/(.*)$': '<rootDir>/src/controller/$1',
    '^@config/(.*)$': '<rootDir>/src/config/$1',
    '^@interface/(.*)$': '<rootDir>/src/interface/$1',
    '^@model/(.*)$': '<rootDir>/src/model/$1',
    '^@serializer/(.*)$': '<rootDir>/src/serializer/$1',
  },
};
