import {
  LayoutDashboard,
  BookOpen,
  Users,
  KanbanSquare,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
  badge?: string;
};

export const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "대시보드", icon: LayoutDashboard },
  { href: "/docs", label: "문서", icon: BookOpen },
  { href: "/users", label: "사용자 관리", icon: Users },
  { href: "/board", label: "게시판", icon: KanbanSquare },
];
