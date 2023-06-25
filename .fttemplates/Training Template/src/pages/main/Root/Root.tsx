/*------------------------------------------------------------------------------------------------------------------------------------------
 * Root.tsx
 * WRITER : <FTName | camelcase>
 * DATE : 2023-xx-xx
 * DISCRIPTION : React 기초 예제
 * TYPE : Page
 * 개정이력 :
--------------------------------------------------------------------------------------------------------------------------------------------*/
import React from "react";
import "./Root.scss";

type TrainingType = {
  title: string;
  desc: string[];
};
const tl: TrainingType[] = [
  {
    title: `Q1. Sample page 바로가기를 만들어주세요.`,
    desc: [
      `1. "Go Sample Page" <a> 태그를 클릭하면 /sample 로 이동하도록 해주세요`,
      `2. /sample 로 이동하면 화면에 "Sample Page"문구가 보이도록 해주세오`
    ]
  },
  {
    title: `Q2. Root page에 "DefaultLayout"를 적용해 주세요.`,
    desc: [
      `1. Routing을 사용해 Root page에 "DefaultLayout"이 적용될 수 있도록 "DefaultLayout.tsx"와 "App.tsx"를 수정해 주세요`,
      `2. DefaultLayout 적용 시 상단에 "Default Layout" 문구와 기존 Root page 내용이 화면에 나타나야 합니다`
    ]
  },
  {
    title: `Q3. "Counter" 컴포넌트를 만들어 주세요.`,
    desc: [
      `1. Counter를 컴포넌트로 만들고 적용해 주세요.`,
      `2. props로 amount 값을 받아 '+', '-' 버큰 클릭 시 amount만큼 증가, 감소 하도록 구현해 주세요.`,
      `3. '0' 버튼을 클릭하면 counter 값이 0으로 초기화 되도록 해주세요.`,
    ]
  }
];

interface RootProps {}

function Root(props: RootProps) {
  /* ――――――――――――――― Variable ――――――――――――――― */
  /* Props ――――― */
  const {} = props;
  /* State ――――― */
  /* Const ――――― */
  /* API ――――――― */

  /* ―――――――――――――――― Method ―――――――――――――――― */

  /* ―――――――――――――― Use Effect ―――――――――――――― */
  React.useEffect(() => {}, []);

  /* ―――――――――――――――― Return ―――――――――――――――― */
  return <div data-page="root">
    <p className="title">React Training</p>
    <div className="content-box">
      <Root.Training title={tl[0].title} desc={tl[0].desc}>
        <Root.StyledText><a className="link">Go Sample Page</a></Root.StyledText>
      </Root.Training>
      <Root.Training title={tl[1].title} desc={tl[1].desc} />
      <Root.Training title={tl[2].title} desc={tl[2].desc}>
        <div data-component="root.counter">
          <div className="count-box"><input type="text" value={0} readOnly/></div>
          <div className="controller-box">
            <button>-</button>
            <button>+</button>
            <button>0</button>
          </div>
        </div>
      </Root.Training>
    </div>
  </div>;
}

namespace Root {
  interface TrainingProps extends TrainingType {
    children?: React.ReactNode;
  }
  export function Training (props: TrainingProps) {
    const {title, desc, children} = props;

    return <div data-component="root.training">
      <p className="title">{title}</p>
      <div className="desc-box">
        {desc.map((d, i) => <p key={`desc-${i}`}>{d}</p>)}
      </div>
      <div className="content">{children}</div>
    </div>
  }

  interface StyledText {
    children: React.ReactNode;
  }
  export function StyledText (props: StyledText) {
    const { children } = props;
    return <div data-component="root.styledText"><h1 className="retro">{children}</h1></div>
  }


  // Counter 컴포넌트
  interface CounterProps {}
  export function Counter (props: CounterProps) {

  }
}

export default Root;
