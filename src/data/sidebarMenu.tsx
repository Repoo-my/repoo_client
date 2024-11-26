import Calendar from "@/ui/src/icons/Sidebar/Calendar";
import Menu from "@/ui/src/icons/Sidebar/Menu";
import Office from "@/ui/src/icons/Sidebar/Office";
import Pencil from "@/ui/src/icons/Sidebar/Pencil";
import Sparkle from "@/ui/src/icons/Sidebar/Sparkle";
import User from "@/ui/src/icons/Sidebar/User";

export const sidebarMenu = [
  {
    id: 1,
    title: "채용 정보",
    isOpen: true,
    items: [
      { id: 11, title: "전체공고", icon: <Menu />, link: "/jobs/all" },
      { id: 12, title: "맞춤공고", icon: <Sparkle />, link: "/jobs/custom" },
    ],
  },
  {
    id: 2,
    title: "일정 관리",
    isOpen: true,
    items: [
      { id: 21, title: "나의 캘린더", icon: <Calendar />, link: "/calendar" },
    ],
  },
  {
    id: 3,
    title: "나의 레포",
    isOpen: true,
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
];
