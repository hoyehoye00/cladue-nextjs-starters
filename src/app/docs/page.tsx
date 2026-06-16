import { MainLayout } from "@/components/layout/main-layout";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type SectionProps = {
  id: string;
  title: string;
  description?: string;
  children: React.ReactNode;
};

function Section({ id, title, description, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-20">
      <h2 className="text-2xl font-bold tracking-tight mb-1">{title}</h2>
      {description && (
        <p className="text-muted-foreground mb-4">{description}</p>
      )}
      {children}
      <Separator className="mt-10" />
    </section>
  );
}

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="rounded-lg bg-muted px-4 py-3 text-sm font-mono overflow-x-auto">
      <code>{children}</code>
    </pre>
  );
}

const UI_COMPONENTS = [
  { name: "Button", desc: "기본 액션 버튼. variant(default·secondary·outline·ghost·destructive·link)와 size(lg·default·sm·icon) 지원" },
  { name: "Badge", desc: "상태나 카테고리를 나타내는 작은 레이블 컴포넌트" },
  { name: "Card", desc: "콘텐츠 그룹을 담는 컨테이너. CardHeader·CardContent·CardFooter로 구성" },
  { name: "Alert", desc: "중요 메시지를 표시하는 알림 컴포넌트. default·destructive variant 지원" },
  { name: "Dialog", desc: "모달 대화 상자. DialogTrigger·DialogContent·DialogHeader로 구성" },
  { name: "Tooltip", desc: "호버 시 도움말 텍스트 표시. TooltipProvider 내부에서 사용 필요" },
  { name: "Table", desc: "데이터를 행·열로 표시. TableHeader·TableBody·TableRow·TableCell로 구성" },
  { name: "Tabs", desc: "탭 전환 UI. TabsList·TabsTrigger·TabsContent로 구성" },
  { name: "Accordion", desc: "접고 펼치는 아코디언 패널. AccordionItem·AccordionTrigger·AccordionContent로 구성" },
  { name: "Pagination", desc: "페이지 탐색 컴포넌트" },
  { name: "Breadcrumb", desc: "현재 위치를 나타내는 경로 표시 컴포넌트" },
  { name: "DropdownMenu", desc: "클릭 시 열리는 맥락 메뉴" },
  { name: "Input", desc: "텍스트 입력 필드" },
  { name: "Select", desc: "드롭다운 선택 입력" },
  { name: "Textarea", desc: "여러 줄 텍스트 입력 필드" },
  { name: "Switch", desc: "토글 스위치 입력" },
  { name: "Checkbox", desc: "체크박스 입력" },
  { name: "Avatar", desc: "사용자 프로필 이미지. AvatarImage·AvatarFallback으로 구성" },
  { name: "Skeleton", desc: "로딩 상태를 나타내는 플레이스홀더" },
  { name: "Sonner (Toast)", desc: "toast() 함수로 화면 우측 하단에 알림 표시" },
  { name: "Sheet", desc: "화면 가장자리에서 슬라이드로 나타나는 패널" },
  { name: "Separator", desc: "수평/수직 구분선" },
  { name: "Label", desc: "폼 입력 요소와 연결되는 레이블" },
];

export default function DocsPage() {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto space-y-12 pb-16">
        {/* 페이지 헤더 */}
        <div className="space-y-3">
          <Badge variant="secondary">문서</Badge>
          <h1 className="text-4xl font-bold tracking-tight">
            Next.js 스타터킷 가이드
          </h1>
          <p className="text-lg text-muted-foreground">
            shadcn/ui, Tailwind CSS v4, next-themes를 기반으로 한 스타터킷의 모든 기능을 설명합니다.
          </p>
        </div>

        <Separator />

        {/* 목차 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">목차</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
              {[
                ["시작하기", "#getting-started"],
                ["프로젝트 구조", "#structure"],
                ["레이아웃 시스템", "#layout"],
                ["UI 컴포넌트", "#components"],
                ["테마 시스템", "#theme"],
                ["네비게이션 커스터마이징", "#navigation"],
                ["아이콘", "#icons"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="hover:text-foreground transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>

        {/* 1. 시작하기 */}
        <Section
          id="getting-started"
          title="시작하기"
          description="프로젝트를 로컬에서 실행하는 방법입니다."
        >
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">1. 저장소 클론 후 의존성 설치</p>
              <CodeBlock>{`git clone <repository-url>
cd cladue-nextjs-starters
npm install`}</CodeBlock>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">2. 개발 서버 실행</p>
              <CodeBlock>{`npm run dev`}</CodeBlock>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">3. 프로덕션 빌드</p>
              <CodeBlock>{`npm run build
npm run start`}</CodeBlock>
            </div>
          </div>
        </Section>

        {/* 2. 프로젝트 구조 */}
        <Section
          id="structure"
          title="프로젝트 구조"
          description="주요 디렉토리와 파일 역할입니다."
        >
          <CodeBlock>{`src/
├── app/
│   ├── layout.tsx          # 루트 레이아웃 (ThemeProvider, Toaster 포함)
│   ├── page.tsx            # 대시보드 — UI 컴포넌트 전체 쇼케이스
│   └── docs/
│       └── page.tsx        # 이 문서 페이지
├── components/
│   ├── layout/
│   │   ├── nav-items.ts    # 네비게이션 메뉴 정의
│   │   ├── main-layout.tsx # 헤더 + 사이드바 + 푸터 래퍼
│   │   ├── header.tsx      # 상단 헤더 (로고, 네비게이션, 테마 토글)
│   │   ├── sidebar.tsx     # 좌측 사이드바 + 모바일 시트 메뉴
│   │   └── footer.tsx      # 하단 푸터
│   └── ui/                 # shadcn/ui 컴포넌트 (25개+)
├── lib/
│   └── utils.ts            # cn() 유틸리티 (clsx + tailwind-merge)
└── providers/
    └── theme-provider.tsx  # next-themes ThemeProvider 래퍼`}</CodeBlock>
        </Section>

        {/* 3. 레이아웃 시스템 */}
        <Section
          id="layout"
          title="레이아웃 시스템"
          description="MainLayout 컴포넌트로 헤더, 사이드바, 푸터를 제어합니다."
        >
          <div className="space-y-4">
            <p className="text-sm">
              모든 페이지는 <code className="bg-muted px-1 py-0.5 rounded text-xs">MainLayout</code>으로 감싸서 일관된 UI를 제공합니다.
            </p>
            <CodeBlock>{`import { MainLayout } from "@/components/layout/main-layout";

export default function MyPage() {
  return (
    <MainLayout>
      {/* 콘텐츠 */}
    </MainLayout>
  );
}`}</CodeBlock>
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">MainLayout Props</CardTitle>
                <CardDescription>각 옵션의 기본값은 모두 true입니다.</CardDescription>
              </CardHeader>
              <CardContent>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-muted-foreground border-b">
                      <th className="pb-2 font-medium">Prop</th>
                      <th className="pb-2 font-medium">타입</th>
                      <th className="pb-2 font-medium">설명</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {[
                      ["showHeader", "boolean", "상단 헤더 표시 여부"],
                      ["showSidebar", "boolean", "좌측 사이드바 표시 여부"],
                      ["showFooter", "boolean", "하단 푸터 표시 여부"],
                      ["children", "ReactNode", "페이지 콘텐츠"],
                    ].map(([prop, type, desc]) => (
                      <tr key={prop}>
                        <td className="py-2 font-mono text-xs">{prop}</td>
                        <td className="py-2 text-muted-foreground text-xs">{type}</td>
                        <td className="py-2 text-muted-foreground">{desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* 4. UI 컴포넌트 */}
        <Section
          id="components"
          title="UI 컴포넌트"
          description="shadcn/ui 기반의 컴포넌트 목록입니다. 모두 src/components/ui/ 에 위치합니다."
        >
          <div className="grid gap-3 sm:grid-cols-2">
            {UI_COMPONENTS.map(({ name, desc }) => (
              <Card key={name} className="p-4">
                <p className="font-medium text-sm mb-1">{name}</p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </Card>
            ))}
          </div>
          <div className="mt-6 space-y-4">
            <h3 className="font-semibold">사용 예시 — Button</h3>
            <CodeBlock>{`import { Button } from "@/components/ui/button";

<Button>기본 버튼</Button>
<Button variant="secondary">보조 버튼</Button>
<Button variant="outline">아웃라인</Button>
<Button variant="destructive">삭제</Button>
<Button size="sm">작은 버튼</Button>
<Button size="icon"><Icon /></Button>`}</CodeBlock>
            <h3 className="font-semibold">사용 예시 — Toast (Sonner)</h3>
            <CodeBlock>{`"use client";
import { toast } from "sonner";

// 버튼 클릭 핸들러 등에서 호출
toast.success("저장되었습니다.");
toast.error("오류가 발생했습니다.");
toast.info("알림 메시지입니다.");`}</CodeBlock>
          </div>
        </Section>

        {/* 5. 테마 시스템 */}
        <Section
          id="theme"
          title="테마 시스템"
          description="next-themes를 사용해 라이트·다크·시스템 테마를 지원합니다."
        >
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              루트 레이아웃(<code className="bg-muted px-1 py-0.5 rounded text-xs">src/app/layout.tsx</code>)에서
              <code className="bg-muted px-1 py-0.5 rounded text-xs ml-1">ThemeProvider</code>가 전역으로 적용되어 있습니다.
              헤더 우측의 테마 토글 버튼으로 전환할 수 있습니다.
            </p>
            <h3 className="font-semibold text-sm">클라이언트 컴포넌트에서 테마 읽기</h3>
            <CodeBlock>{`"use client";
import { useTheme } from "next-themes";

export function MyComponent() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme("dark")}>
      현재 테마: {theme}
    </button>
  );
}`}</CodeBlock>
            <Card>
              <CardContent className="pt-4">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">주의:</strong> 서버 사이드 렌더링 시 hydration 불일치를 방지하려면{" "}
                  <code className="bg-muted px-1 py-0.5 rounded text-xs">mounted</code> 상태를 확인한 후 테마 의존 UI를 렌더링하세요.
                </p>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* 6. 네비게이션 커스터마이징 */}
        <Section
          id="navigation"
          title="네비게이션 커스터마이징"
          description="메뉴 항목은 한 파일에서 중앙 관리됩니다."
        >
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              <code className="bg-muted px-1 py-0.5 rounded text-xs">src/components/layout/nav-items.ts</code>의{" "}
              <code className="bg-muted px-1 py-0.5 rounded text-xs">NAV_ITEMS</code> 배열을 수정하면
              헤더·사이드바·모바일 메뉴에 자동 반영됩니다.
            </p>
            <CodeBlock>{`import { LayoutDashboard, BookOpen, type LucideIcon } from "lucide-react";

export const NAV_ITEMS = [
  { href: "/", label: "대시보드", icon: LayoutDashboard },
  { href: "/docs", label: "문서", icon: BookOpen },
  // 새 메뉴 항목 추가
  { href: "/blog", label: "블로그", icon: FileText, badge: "New" },
];`}</CodeBlock>
            <p className="text-sm text-muted-foreground">
              <code className="bg-muted px-1 py-0.5 rounded text-xs">badge</code> 필드를 추가하면 메뉴 항목에 배지가 표시됩니다.
            </p>
          </div>
        </Section>

        {/* 7. 아이콘 */}
        <Section
          id="icons"
          title="아이콘"
          description="lucide-react를 사용합니다. 5,000개 이상의 아이콘을 제공합니다."
        >
          <div className="space-y-4">
            <CodeBlock>{`import { Home, Settings, User, Bell } from "lucide-react";

<Home className="h-4 w-4" />
<Settings className="h-5 w-5 text-muted-foreground" />
<Bell className="h-6 w-6 text-primary" />`}</CodeBlock>
            <p className="text-sm text-muted-foreground">
              전체 아이콘 목록은{" "}
              <a
                href="https://lucide.dev/icons/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4"
              >
                lucide.dev/icons
              </a>
              에서 확인할 수 있습니다.
            </p>
          </div>
        </Section>
      </div>
    </MainLayout>
  );
}
