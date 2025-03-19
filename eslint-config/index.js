module.exports = {
  // 필요한 플러그인을 여기에 정의합니다.
  plugins: ['no-relative-import-paths'],
  extends: ['@rushstack/eslint-config/profile/web-app'],
  rules: {
    // RushStack의 변수 타입 정의 강제 규칙 비활성화
    '@rushstack/typedef-var': 'off',

    // 네이밍 규칙 끄기
    '@typescript-eslint/naming-convention': 'off',

    // TypeScript에서 타입 정의 강제하는 규칙 비활성화
    '@typescript-eslint/typedef': 'off',

    // 함수의 명시적 반환 타입 요구하는 규칙 비활성화
    '@typescript-eslint/explicit-function-return-type': 'off',

    // JSX 내에서 `.bind(this)` 사용을 금지하는 규칙 비활성화 (성능 문제 고려)
    'react/jsx-no-bind': 'off',

    // import 정렬 규칙 설정
    'import/order': [
      'warn',
      {
        groups: [
          ['builtin', 'external'], // 기본 모듈과 외부 패키지는 함께 정렬
          'internal', // 내부 모듈 그룹
          ['parent', 'sibling', 'index'], // 부모, 형제, 현재 디렉토리 파일 정렬
        ],
        pathGroupsExcludedImportTypes: ['builtin'], // 기본 내장 모듈을 제외
        alphabetize: { order: 'asc', caseInsensitive: true }, // 알파벳 순 정렬, 대소문자 무시
      },
    ],

    // 특정 코드 블록 사이에 줄바꿈 강제
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' }, // 모든 코드 뒤에는 return문 앞에 빈 줄 추가
    ],

    // 삼항 연산자 내에서 사용되지 않는 표현식 허용
    'no-unused-expressions': ['error', { allowTernary: true }],
  },
  settings: {
    // 공통으로 넣고 싶은 설정이 있으면 추가합니다.
  },
};
