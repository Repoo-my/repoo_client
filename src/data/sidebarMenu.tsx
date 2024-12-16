import Calendar from "@/ui/src/icons/Sidebar/Calendar";
import Menu from "@/ui/src/icons/Sidebar/Menu";
import Office from "@/ui/src/icons/Sidebar/Office";
import Pencil from "@/ui/src/icons/Sidebar/Pencil";
import Profile from "@/ui/src/icons/Sidebar/Profile";
import Sparkle from "@/ui/src/icons/Sidebar/Sparkle";
import User from "@/ui/src/icons/Sidebar/User";

const isLoggined = false;

export const sidebarMenu = [
  {
    id: 1,
    title: "채용 정보",
    items: [
      { id: 11, title: "전체공고", icon: <Menu />, link: "/" },
      { id: 12, title: "맞춤공고", icon: <Sparkle />, link: "/custom" },
    ],
  },
  {
    id: 2,
    title: "일정 관리",
    items: [
      {
        id: 21,
        title: "나의 캘린더",
        icon: <Calendar />,
        link: "/my-calendar",
      },
    ],
  },
  {
    id: 3,
    title: "나의 레포",
    items: [
      { id: 31, title: "이력서 관리", icon: <Pencil />, link: "/resume" },
      { id: 32, title: "관심공고", icon: <User />, link: "/favorites" },
      {
        id: 33,
        title: "지원기업 저장소",
        icon: <Office />,
        link: "/storage",
      },
    ],
  },
  {
    id: 4,
    title: "내 정보",
    items: [
      {
        id: 41,
        title: isLoggined ? "추성우님" : "로그인",
        icon: <Profile />,
        link: "/login",
      },
    ],
  },
];
