const analyse = `
    당신은 대한민국 최고의 입시 전략가 'JH PathFinder'입니다. 
    학생이 입력한 생활기록부 내용을 바탕으로 대학 합격 가능성을 분석하고 전략을 제시합니다.

    [분석 원칙]
    1. 입학사정관의 페르소나: 단순 요약이 아니라, 상위권 대학 입학사정관의 관점에서 활동의 '진위 여부'와 '학업적 깊이'를 집요하게 파고드십시오.
    2. 3대 핵심 역량: 학업역량, 전공적합성, 발전가능성을 기준으로 하되, 각 활동이 대학 입학 후 연구 수행 능력과 어떻게 연결되는지 증명하십시오.
    3. 비판적 시각: 칭찬은 지양하고, 다른 경쟁자 대비 해당 학생의 활동이 갖는 '차별점 부족'이나 '논리적 허점'을 우선적으로 짚어내십시오.

    [답변 구조]
    1. 분석 총평: 생기부 전체를 관통하는 핵심 키워드와 한 줄 평가.
    2. 핵심 강점: 대학 입학 사정관이 좋아할 만한 킬러 콘텐츠(활동) 분석.
    3. 위험 요소: 현재 생기부에서 부족하거나 보완이 절실한 부분을 다양한 관점으로 작성.
    4. 전략적 제언: 앞으로 어떤 방향으로 독서, 세특, 창체 활동을 채워야 할지 구체적인 솔루션 제공.

    [답변의 풍부함 가이드]
    - 분석 총평: 학생의 역량을 상징하는 한 줄 평가 뒤에, 이 학생이 타겟팅해야 할 적정 대학 라인을 구체적으로 언급하십시오.
    - 핵심 강점: 활동의 단순 나열이 아니라, '동기-과정-결과-변화'의 메커니즘이 가장 잘 드러난 킬러 콘텐츠를 상세히 기술하십시오.
    - 위험 요소: 학업 불균형, 활동의 나열식 기록, 주도성 부족 등 사정관이 감점 요인으로 삼을만한 포인트를 다각도로 분석하십시오.
    - 전략적 제언: '열심히 하라'는 식의 조언이 아니라, 구체적인 논문 주제, 도서 제목, 혹은 심화 탐구의 연결 고리를 3가지 이상 제시하십시오.

    [필수 지침]
    말투는 전문가답게 '~입니다', '~하십시오'와 같은 단정적인 어조를 사용하세요.
    모든 답변은 html 형식을 사용하여, 두 번 이상 <br>이나 \n를 사용하지 마세요. 분석 총평, 핵심 강점, 위험 요소, 전략적 제언 글자는 <b class="title"></b>안에 작성하고, 그 어떠한 단어도 강조하지 말고 답변하세요.

    [예외 처리 지침]
    1. 입력 내용 검증: 입력된 텍스트가 학생의 활동, 성적, 동아리, 세특 등 '학교 생활기록부'와 관련된 내용이 전혀 아닐 경우, 다른 분석을 수행하지 마십시오.
    2. 고정 답변: 위 경우 오직 "생활기록부 관련 내용을 입력해주세요."라는 문구만 출력하고 답변을 종료하십시오.
    3. 이상한 입력: 입력값이 공백이거나 무의미한 단어(예: "안녕", "테스트")일 경우에도 동일하게 처리하십시오.
`;

const interview = `
    당신은 대한민국 최고의 입시 전략가 'JH PathFinder'이자, 상위권 대학의 입학사정관입니다. 
    학생이 입력한 생활기록부를 바탕으로 실제 면접에서 나올 법한 날카로운 질문과 합격을 부르는 답변 전략을 제시합니다.

    [질문 생성 원칙]
    1. 서류 진위 확인: 생기부에 기록된 심화 개념(수식, 이론, 알고리즘 등)을 실제로 이해하고 있는지 묻는 확인 질문을 반드시 포함하십시오.
    2. 꼬리 질문 시뮬레이션: 단순 질문에 그치지 않고, 학생의 예상 답변 뒤에 나올 수 있는 '심화 압박 꼬리 질문'을 설계하십시오.
    3. 전공 소양 및 가치관: 기술적 지식뿐만 아니라 해당 전공자로서 갖춰야 할 윤리 의식이나 사회적 태도를 묻는 질문을 포함하십시오.

    [답변 구조, 무조건 이 형태를 지키세요.]
    1. 예상 질문: 사정관의 의도가 담긴 날카로운 질문.
    2. 압박 꼬리 질문: 답변 이후 허점을 찌를 수 있는 추가 질문.
    3. 모범 답안 가이드: '동기-과정-결과-배운 점'이 포함된 논리적 구조의 답변 예시.
    4. 핵심 키워드: 답변 시 반드시 포함해야 할 전공 용어 및 핵심 역량 단어.

    [필수 지침]
    말투는 전문가답게 '~입니다', '~하십시오'와 같은 단정적인 어조를 사용하세요.
    모든 답변은 html 형식을 사용하여, 두 번 이상 <br>이나 \n를 사용하지 마세요. 
    예상 질문, 압박 꼬리 질문, 모범 답안 가이드, 핵심 키워드 글자는 <b class="title"></b>안에 작성하세요.
    모범 답안 가이드의 내용만 예외적으로 <div class="answer"></div>안에 작성하세요.
    어떠한 단어도 강조하지 마십시오.

    [예외 처리 지침]
    1. 입력 내용 검증: 입력된 텍스트가 생활기록부 활동과 무관할 경우 분석을 거부하십시오.
    2. 고정 답변: 위 경우 오직 "면접 질문 추출을 위해 생활기록부 관련 내용을 입력해주세요."라고만 출력하십시오.
    3. 이상한 입력: 입력값이 공백이거나 무의미한 단어(예: "안녕", "테스트")일 경우에도 동일하게 처리하십시오.
`;

async function callAI(userContent, prompt)
{
    const response = await fetch('/api/completion', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userContent, prompt
        }),
    });

    const result = await response.json();
    return result.choices[0].message.content;
}

document.querySelector("#analyse").addEventListener("click", async () => {
    if (!document.querySelector("textarea").value)
    {
        alert("분석할 생활기록부 내용을 입력해주세요.");
        return;
    }

    document.querySelector("#showAnswer").style.display = "none";
    document.querySelector(".loading").style.display = "flex";

    const messages = [
        "JH PathFinder 알고리즘을 가동합니다...",
        "생활기록부 텍스트 데이터 정밀 스캐닝 중...",
        "주요 교과 내신 추이 및 학업 성취도 분석 중...",
        "세특 기록 내 핵심 역량 키워드 추출 중...",
        "창의적 체험활동의 전공 적합성 검토 중...",
        "지원 희망 대학의 최근 합격 사례와 대조 중...",
        "활동의 심화 수준을 판별하는 중...",
        "입시 트렌드를 반영한 위험 요소 시뮬레이션 중...",
        "자기주도적 탐구 역량의 진위 여부 검증 중...",
        "합격률을 높이기 위한 최종 전략 로드맵 구성 중...",
    ];

    let messageIndex = 0;
    document.querySelector(".loading .msg").innerText = messages[0];

    const printMessage = setInterval(() => {
        messageIndex = (messageIndex + 1) % messages.length;
        document.querySelector(".loading .msg").innerText = messages[messageIndex];
    }, 3500);

    let result = await callAI(document.querySelector("textarea").value, analyse);
    result = result.replace(/\s*(<u[^>]*>|<u>|<\/u>|<b[^>]*>|<b>|<\/b>)\s*/g, '$1')
                    .replace(/(\d+\.)(?!\d)/g, '<u>$1</u>');
    console.log(result);

    clearInterval(printMessage);
    document.querySelector(".loading").style.display = "none";
    document.querySelector("#result div").innerHTML = result;
})

document.querySelector("#interview").addEventListener("click", async () => {
    if (!document.querySelector("textarea").value)
    {
        alert("먼저 생활기록부 내용을 입력해주세요.");
        return;
    }

    document.querySelector("#showAnswer").style.display = "block";
    document.querySelector(".loading").style.display = "flex";

    const messages = [
        "JH PathFinder 면접 모듈을 가동합니다...",
        "생활기록부 기반 고난도 압박 질문 생성 중...",
        "세특 내 전문 용어에 대한 진위 확인 문항 도출 중...",
        "입학사정관의 시각으로 서류의 논리적 허점 탐색 중...",
        "주요 활동에 대한 심화 꼬리 질문 시나리오 설계 중...",
        "전공 적합성과 인성 역량을 동시에 검증 질문 구성 중...",
        "학생의 답변을 유도할 수 있는 날카로운 질문지 작성 중...",
        "과거 합격자들의 면접 복기 데이터 분석 중...",
        "모범 답변의 신뢰도를 높여줄 핵심 키워드 추출 중...",
    ];

    let messageIndex = 0;
    document.querySelector(".loading .msg").innerText = messages[0];

    const printMessage = setInterval(() => {
        messageIndex = (messageIndex + 1) % messages.length;
        document.querySelector(".loading .msg").innerText = messages[messageIndex];
    }, 3500);

    let result = await callAI(document.querySelector("textarea").value, interview);
    result = result.replace(/\s*(<u[^>]*>|<u>|<\/u>|<b[^>]*>|<b>|<\/b>)\s*/g, '$1')
                    .replace(/(\d+\.)(?!\d)/g, '<u>$1</u>');
    console.log(result);

    clearInterval(printMessage);
    document.querySelector(".loading").style.display = "none";
    document.querySelector("#result div").innerHTML = result;

    document.querySelector("#showAnswer").addEventListener("click", () => {
        isAnswerOpened = !isAnswerOpened;

        if (isAnswerOpened)
        {
            document.querySelector(".answer").style.display = "block";
            document.querySelector("#showAnswer").innerText = "모범 답안 접기";
        }
        else
        {
            document.querySelector(".answer").style.display = "none";
            document.querySelector("#showAnswer").innerText = "모범 답안 확인";
        }
    })
})

let isAnswerOpened = false;
let isTextClosed = false;

document.querySelector("#closeText").addEventListener("click", () => {
    isTextClosed = !isTextClosed;

    if (isTextClosed)
    {
        document.querySelector("#closeText").innerHTML = `<i class="fa-solid fa-angles-right"></i>`;
        document.querySelector(".container > div:first-child").style.display = "none";
        document.querySelector("#result").style.width = "calc(100vw - 50px)";
        document.querySelector("#result").style.marginLeft = "50px";
        document.querySelector(".line").style.backgroundColor = "transparent";
        document.querySelector(".line").style.position = "absolute";
    }
    else
    {
        document.querySelector("#closeText").innerHTML = `<i class="fa-solid fa-angles-left"></i>`;
        document.querySelector(".container > div:first-child").style.display = "flex";
        document.querySelector("#result").style.width = "600px";
        document.querySelector("#result").style.marginLeft = "0";
        document.querySelector(".line").style.backgroundColor = "#e9e9e9";
        document.querySelector(".line").style.position = "static";
    }
})