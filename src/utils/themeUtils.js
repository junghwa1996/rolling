import theme from '../styles/theme';

/**
 * 폰트 유틸 함수
 * @param {*} input 사용방법 ${tm_font('24')} , ${tm_font('24b')}
 * weight값이 없으면 regular로 출력
 * @returns 테마에 지정된 스타일 속성값을 문자열로 리턴
 */
export const tm_font =
  (input) =>
  ({ theme }) => {
    // 숫자와 마지막 문자를 분리하는 정규식
    const match = input.match(/^(\d+)([bB]?)$/);

    if (!match) {
      console.error(
        `Error: 잘못된 폰트 입력값 '${input}' 입니다. 두 자리 이상의 숫자를 입력해야 합니다.`,
      );
      return '';
    }

    const size = match[1]; // 숫자 부분
    const weight = match[2] === 'b' || match[2] === 'B' ? 'Bold' : 'Regular'; // weight가 b이면 Bold로 설정
    const fontKey = `${size}${weight}`; // 최종 fontKey 생성

    const fontStyle = theme.fontTheme[fontKey];

    if (!fontStyle) {
      console.error(`Error: 테마에 '${fontKey}' 스타일이 없습니다.`);
      return '';
    }

    // 개별 속성을 CSS 문자열로 반환
    return `
      font-weight: ${fontStyle.fontWeight};
      font-size: ${fontStyle.fontSize};
      line-height: ${fontStyle.lineHeight};
      letter-spacing: ${fontStyle.letterSpacing};
    `;
  };

/**
 * 색상 유틸 함수
 * @param {*} inputColor 사용방법 ${tm_color('blue300')}, ${tm_color('black')}, ${tm_color('#FFF0D6')}
 * hex 값으로 작성했을때, 만일 테마에 없는 속성값이면 해당 hex 값을 그대로 반환
 * @returns 테마에 지정된 스타일 속성값으로 리턴
 */
export const tm_color =
  (inputColor) =>
  ({ theme }) => {
    // 모든 색상 값을 플랫하게 변환하여 색상 코드와 키를 매핑
    const flattenColors = Object.entries(theme.colorTheme).reduce(
      (acc, [key, value]) => {
        if (typeof value === 'object') {
          Object.entries(value).forEach(([shade, hex]) => {
            acc[`${key}${shade}`] = hex; // "blue500" 등 키와 hex 값 매핑
          });
        } else {
          acc[key] = value; // 단일 색상 값 (예: white, black 등)
        }
        return acc;
      },
      {},
    );

    // 테마에 일치하는 색상 코드가 있으면 반환, 없으면 그대로 반환
    return flattenColors[inputColor.toLowerCase()] || inputColor;
  };

/**
 * 그림자 유틸 함수
 * ${tm_shadow('shadow0_2_008')}
 * shadowTheme에서 이름을 기반으로 그림자 스타일을 반환합니다.
 */

export const tm_shadow =
  (inputShadow) =>
  ({ theme }) => {
    const shadowStyle = theme.shadowTheme[inputShadow];
    if (!shadowStyle) {
      console.error(`Error: '${inputShadow}' 그림자 스타일이 테마에 없습니다.`);
      return '';
    }
    return `
      box-shadow: ${shadowStyle};
    `;
  };

/**
 * 블러 유틸 함수
 * ${tm_blur('blur04')}
 * blurTheme에서 이름을 기반으로 블러 스타일을 반환합니다.
 */

export const tm_blur =
  (inputBlur) =>
  ({ theme }) => {
    const blurStyle = theme.blurTheme[inputBlur];
    if (!blurStyle) {
      console.error(`Error: '${inputBlur} 블러 스타일이 테마에 없습니다. `);
      return '';
    }
    return `
    backdrop-filter: ${blurStyle};
  `;
  };
