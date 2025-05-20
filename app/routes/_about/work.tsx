import { Link } from "@remix-run/react";

interface Work {
  name: string;
  role: string;
  skill: string;
  project: {
    name: string;
    period: string;
    role: string;
    skill: string;
    link?: string;
    note?: string;
  }[];
}

const workList: Work[] = [
  {
    name: '휴넷',
    role: '웹퍼블리셔, 프론트엔드',
    skill: 'React.js, Next.js, typescript, tailwind, HTML5, CSS, javascript, jquery',
    project: [
      {
        name: '러닝메이커(학습창/학습홈)',
        period: '2024.08.12 ~ 2025.03.27',
        role: '프론트엔드 개발(공통UI : 50%)',
        skill: 'React.js, TypeScript, Tailwind CSS, Storybook, zustand, 반응형 UI',
      },
      {
        name: 'NEW 휴넷 CEO',
        link: 'https://ceo.hune.net',
        period: '2023.11.27 ~ 2024.02.29',
        role: '프론트엔드 개발(UI & API연동 : 30%)',
        skill: 'Next.js, TypeScript, Tailwind CSS, Storybook, Recoil, 반응형 UI',
      },
      {
        name: '투입리소스 관리 분석 시스템',
        link: 'https://chronos.hunet.name',
        period: '2023.07.10 ~ 2023.12',
        role: '프론트엔드 개발(공통 UI & API연동 : 40%)',
        skill: 'React.js, TypeScript, MUI, Recoil, 반응형 UI',
      },
      {
        name: '코오롱 베니트 연수원 대관사이트',
        link: 'https://kolon-institute.labs.hunet.co.kr',
        period: '2023.03.27 ~ 2023.04.12',
        role: '프론트엔드 개발(UI : 100%)',
        skill: 'React.js, TypeScript, Tailwind CSS, twin.macro, Storybook, 반응형 UI',
      },
      {
        name: 'Checkup 1.5(진단 테스트)',
        link: 'https://checkup.hunet.co.kr',
        period: '2023.01 ~ 2023.02.16',
        role: '프론트엔드 개발(UI & API연동 : 20%)',
        skill: 'React.js, TypeScript, Tailwind CSS, twin.macro, Storybook, 반응형 UI',
      }
    ],
  },
  {
    name: '디지털다임',
    role: '웹퍼블리셔, 프론트엔드',
    skill: 'javascript, CSS, HTML5, Vue.js, jquery',
    project: [
      {
        name: '데이터온 CJ프레시 웨이 FS앱',
        period: '2021.11 ~ 2021.12',
        role: '퍼블리싱(30%), 프론트 개발(30%) 담당',
        skill: 'html/css/Javascript/Vue.js',
      },
      {
        name: '아우디폭스바겐코리아 VW 리드매니지먼트 시스템',
        period: '2021.06',
        role: '퍼블리싱(100%), 프론트 개발(20%) 담당',
        skill: 'html/css/Javascript/jquery',
        note: '폭스바겐 리드매니지먼트 시스템 앱(사내 사용 웹앱)'
      },
      {
        name: '데이터온 M-ORDER 온라인 주문 플랫폼',
        link: 'https://www.m-order.ai',
        period: '2020.04',
        role: '퍼블리싱(85%) 담당',
        skill: 'html/css/Javascript/jquery',
      },
      {
        name: 'SK텔레콤 T Place 고도화',
        link: 'https://www.youtube.com/watch?v=41ef52rNw3U',
        period: '2020.03',
        role: '퍼블리싱(30%) 담당',
        skill: 'html/css/Javascript/jquery',
        note: 'T Place 내 무인 개통에 사용되는 태블릿, 키오스크'
      },
      {
        name: '주식회사 재규어랜드로버코리아 Customer Care Service',
        period: '2019.12',
        role: '퍼블리싱(100%) 담당',
        skill: 'html/css/Javascript/jquery',
        note: '재규어랜드로버 고객 서비스 케어 태블릿 (사내 사용 웹앱)'
      },
      {
        name: '아우디폭스바겐코리아 주식회사 (VW)쇼룸리뉴얼',
        link: 'https://showroom.vwkr.co.kr/app/local/promotion/tiguanallspace',
        period: '2019.11',
        role: '퍼블리싱(100%) 담당',
        skill: 'html/css/Javascript/jquery',
      },
      {
        name: '카버코리아 AHC 쇼핑몰',
        link: 'https://www.ahc.co.kr',
        period: '2019.08',
        role: '퍼블리싱(30%) 담당',
        skill: 'html/css/Javascript/jquery',
      },
      {
        name: '아우디폭스바겐코리아 MY VW AS 예약시스템',
        link: 'https://apps.apple.com/kr/app/my-vw/id1361995423',
        period: '2019.07',
        role: '퍼블리싱(100%) 담당',
        skill: 'html/css/Javascript/jquery',
        note: 'MY VW 내 AS 예약시스템 추가 작업'
      },
      {
        name: '로레알 SHISEIDO TRAVEL RETA 브랜드관 구축',
        period: '2019.05 ~ 2021.12',
        role: '퍼블리싱 담당',
        skill: 'html/css/Javascript/jquery',
        note: '신라, 롯데, 현대 면세점 브랜드관 구축'
      },
      {
        name: 'SK 네트웍스 타이어픽',
        link: 'https://www.tire-pick.com',
        period: '2019.05',
        role: '퍼블리싱(20%) 담당',
        skill: 'html/css/Javascript/jquery',
      }
    ],
  },
  {
    name: '해커스교육그룹',
    role: '웹퍼블리셔',
    skill: 'CSS3, HTML5, javascript, jquery',
    project: [
      {
        name: '고우해커스 토플 실시간 퀴즈 이벤트',
        link: 'https://www.gohackers.com/?m=toefl_live_quiz',
        period: '2018.08',
        role: '메인 퍼블리싱 담당/작업 기여도 100%',
        skill: 'html/css/Javascript/jquery',
        note: '고우해커스 사이트 내 토플 실시간 퀴즈 이벤트입니다.'
      },
      {
        name: '해커스 잡 모의고사',
        link: 'https://www.hackersjob.com/',
        period: '2018.03',
        role: '메인 퍼블리싱 담당/작업 기여도 100%',
        skill: 'html/css/Javascript/jquery',
        note: '해커스 잡 사이트 내 모의고사 응시 페이지입니다.'
      },
      {
        name: '해커스 공인중개사, 주택관리사 모의고사',
        link: 'https://land.hackers.com',
        period: '2018.01',
        role: '메인 퍼블리싱 담당/작업 기여도 100%',
        skill: 'html/css/Javascript/jquery',
        note: '해커스 공인중개사, 주택관리사 사이트 내 모의고사 응시 페이지입니다.'
      }
    ],
  },
  {
    name: '인스팟',
    role: '웹퍼블리셔',
    skill: 'CSS3, HTML5, javascript, jquery',
    project: [
      {
        name: '한국화장품 브랜드 닥터메딕스 (Dr.Medix)',
        link: 'https://www.drmedix.co.kr',
        period: '2017.01',
        role: '메인 퍼블리싱 담당/작업 기여도 100%',
        skill: 'html/css/Javascript/jquery/bootstrap',
        note: '한국화장품 브랜드 닥터메딕스 마이크로 사이트 구축 프로젝트입니다.'
      },
      {
        name: '신화정보통신 커플위험체크',
        link: 'http://couple.dbdip.com/couple2/#/dashboard.html',
        period: '2016.12',
        role: '구축 메인 퍼블리싱 담당/작업 기여도 90%',
        skill: 'html/css/Javascript/jquery/bootstrap',
        note: '신화정보통신 커플위험체크 웹 앱 구축 프로젝트입니다.'
      },
      {
        name: 'SK건설 웹진 (SK Webzine)',
        link: 'http://skeyes.skec.com',
        period: '2016.01',
        role: '메인 퍼블리싱 담당/작업 기여도 100%',
        skill: 'html/css/Javascript/jquery/bootstrap',
        note: 'SK건설 웹진 2016년 2017년 리뉴얼 프로젝트입니다.'
      },
      {
        name: 'HS 애드 홈페이지 (HS Ad)',
        link: 'http://www.hsad.co.kr',
        period: '2016.09',
        role: '리뉴얼 구축 서브 퍼블리싱 담당/작업 기여도 30%',
        skill: 'html/css/Javascript/jquery/bootstrap',
        note: 'HS 애드 홈페이지 리뉴얼 구축 프로젝트입니다.'
      },
      {
        name: 'GIIR 홈페이지',
        link: 'http://www.g2rgroup.com',
        period: '2016.09',
        role: '리뉴얼 구축 서브 퍼블리싱 담당/작업 기여도 30%',
        skill: 'html/css/Javascript/jquery/bootstrap',
        note: 'GIIR 홈페이지 리뉴얼 구축 프로젝트입니다.'
      },
      {
        name: '서민금융통합지원센터',
        link: 'http://www.ccfs.or.kr',
        period: '2016.11',
        role: '구축 서브 퍼블리싱 담당/작업 기여도 30%',
        skill: 'html/css/Javascript/jquery',
        note: '서민금융통합지원센터 구축 프로젝트입니다.'
      },
      {
        name: 'BNP파리바 카디프손해보험',
        link: 'https://www.cardifcare.co.kr',
        period: '2016.11',
        role: '구축 서브 퍼블리싱 담당/작업 기여도 30%',
        skill: 'html/css/Javascript/jquery',
        note: 'BNP파리바 카디프손해보험 리뉴얼 구축 프로젝트입니다.'
      },
      {
        name: '한국화장품 브랜드 효움 (Hyoum)',
        link: 'http://www.hyoum.co.kr',
        period: '2016.09',
        role: '구축 메인 퍼블리싱 담당/작업 기여도 100%',
        skill: 'html/css/Javascript/jquery /bootstrap',
        note: '한국화장품 브랜드 효움 마이크로 사이트 구축 프로젝트입니다.'
      },
      {
        name: 'HS Ad CHINA 대한항공 위챗',
        link: 'https://www.koreanair.com/kr/ko/index.do',
        period: '2016.07',
        role: '구축 메인 퍼블리싱 담당/작업 기여도 100%',
        skill: 'html/css/Javascript/jquery',
        note: 'HS Ad CHINA 대한항공 위챗 프로젝트입니다. 위챗에서 보여질 중국 대한항공 모바일 사이트 입니다.'
      },
      {
        name: 'SBS 골프 모바일 (SBS Golf Moblie)',
        link: 'http://m.sbsgolf.com',
        period: '2016.07',
        role: '리뉴얼 구축 서브 퍼블리싱 담당/작업 기여도 30%',
        skill: 'html/css/Javascript/jquery',
        note: 'SBS 골프 모바일 웹 앱 리뉴얼 구축 프로젝트입니다.'
      },
      {
        name: 'HS애드 대학생 광고대상',
        link: 'https://contest.hsad.co.kr',
        period: '2016.05',
        role: '구축 메인 퍼블리싱 담당/작업 기여도 100%',
        skill: 'html/css/Javascript/jquery',
        note: 'HS애드 대학생 광고대상 리뉴얼 구축 프로젝트입니다.'
      },
      {
        name: '한국화장품 공식 사이트 (Hankook Cosmetic)',
        link: 'http://www.ihkcos.co.kr',
        period: '2015.12',
        role: '구축 메인 퍼블리싱 담당/작업 기여도 80%',
        skill: 'html/css/Javascript/jquery/bootstrap',
        note: '한국화장품 공식 사이트 리뉴얼 구축 프로젝트입니다.'
      },
      {
        name: '한국화장품 브랜드 산심 사이트 (Sansim)',
        link: 'http://www.sansim.co.kr',
        period: '2015.12',
        role: '구축 메인 퍼블리싱 담당/작업 기여도 80%',
        skill: 'html/css/Javascript/jquery/bootstrap',
        note: '한국화장품 브랜드 산심 사이트 리뉴얼 구축 프로젝트입니다.'
      },
      {
        name: '페르노리카 코리아 웹진 (PRK E-Zine)',
        link: 'http://www.prk.co.kr',
        period: '2015.12',
        role: '구축 메인 퍼블리싱 담당/작업 기여도 80%',
        skill: 'html/css/Javascript/jquery/bootstrap',
        note: '페르노리카 코리아 웹진 리뉴얼 구축 프로젝트입니다.'
      },
    ]
  },
]

function Work() {
  return (
    <div id="work" className="flex flex-col gap-5">
      <h3>Work.</h3>
      <ul className="flex flex-col divide-y divide-gray-200">
        {workList.map((work, index) => (
          <li className="flex flex-col gap-4 py-5" key={index}>
            <h4 className="text-xl font-bold mb-2">📍 {work.name}</h4>
            <div className="flex gap-2 flex-wrap">
              <span className="font-bold">주요직무</span>
              <span>{work.role}</span>
            </div>
            <div className="flex gap-2 flex-wrap">
              <span className="font-bold">스킬</span>
              <span>{work.skill}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-bold">참여프로젝트</span>
              <ul className="flex flex-col gap-4 pl-4">
                {work.project.map((project, index) => (
                  <li className="flex flex-col gap-2" key={index}>
                    <strong className="block">{project.name}</strong>
                    {project.link && (
                      <Link to={project.link} target="_blank" rel="noopener noreferrer">
                        {project.link}
                      </Link>
                    )}
                    <p>기간 : {project.period}</p>
                    <p>역할 : {project.role}</p>
                    <p>스킬 : {project.skill}</p>
                    {project.note && (
                      <p>참고 : {project.note}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
        </li>
        ))}
      </ul>

    </div>
  );
}

export default Work;