"use client";

import { useState } from "react";
import { toast } from "sonner";
import { useTheme } from "next-themes";
import {
  Rocket,
  Sun,
  Moon,
  Monitor,
  CheckCircle,
  AlertCircle,
  Info,
  Star,
  Bell,
  Trash2,
  Download,
  ChevronRight,
} from "lucide-react";
import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

/* ---------- 섹션 래퍼 ---------- */
function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="!mt-0">{title}</h2>
        {description && (
          <p className="!mt-1 text-muted-foreground">{description}</p>
        )}
      </div>
      <Separator />
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <div className="flex flex-wrap items-center gap-2">{children}</div>
    </div>
  );
}

/* ---------- 샘플 테이블 데이터 ---------- */
const TABLE_DATA = [
  { id: 1, name: "김철수", email: "kim@example.com", role: "관리자", status: "활성" },
  { id: 2, name: "이영희", email: "lee@example.com", role: "편집자", status: "활성" },
  { id: 3, name: "박민준", email: "park@example.com", role: "뷰어", status: "비활성" },
];

/* ---------- 메인 페이지 ---------- */
export default function ShowcasePage() {
  const { setTheme } = useTheme();
  const [switchOn, setSwitchOn] = useState(false);
  const [checked, setChecked] = useState(false);

  return (
    <MainLayout>
      <div className="mx-auto max-w-4xl space-y-16">

        {/* Hero */}
        <div className="space-y-4 text-center py-8">
          <div className="flex justify-center">
            <Badge variant="secondary" className="gap-1.5">
              <Rocket className="h-3 w-3" />
              Next.js v15 스타터킷
            </Badge>
          </div>
          <h1 className="!mt-3">모던 웹 개발의 시작점</h1>
          <p className="text-muted-foreground max-w-xl mx-auto !mt-3">
            Next.js 15 · TypeScript · TailwindCSS v4 · ShadcnUI · lucide-react로
            구성된 프로덕션 레디 스타터킷입니다.
          </p>
          <div className="flex justify-center gap-3 !mt-6">
            <Button size="lg" className="gap-2">
              <Rocket className="h-4 w-4" />
              시작하기
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              문서 보기
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Tier 1: 기초 요소 */}
        <Section title="Tier 1 — 기초 요소" description="UI의 최소 단위 — 버튼, 배지, 아이콘, 색상 팔레트">

          <Row label="Button Variant">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
          </Row>

          <Row label="Button Size">
            <Button size="lg">Large</Button>
            <Button size="default">Default</Button>
            <Button size="sm">Small</Button>
            <Button size="icon">
              <Star className="h-4 w-4" />
            </Button>
            <Button disabled>비활성</Button>
          </Row>

          <Row label="Badge">
            <Badge>기본</Badge>
            <Badge variant="secondary">보조</Badge>
            <Badge variant="destructive">삭제</Badge>
            <Badge variant="outline">아웃라인</Badge>
            <Badge className="gap-1">
              <Star className="h-3 w-3" /> 추천
            </Badge>
          </Row>

          <Row label="아이콘 (lucide-react)">
            {[Rocket, Star, Bell, Download, Trash2, CheckCircle, AlertCircle, Info, Sun, Moon, Monitor].map(
              (Icon, i) => (
                <div key={i} className="flex h-8 w-8 items-center justify-center rounded-md border">
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </div>
              )
            )}
          </Row>

          <Row label="색상 팔레트">
            <div className="grid w-full grid-cols-4 gap-2 sm:grid-cols-8">
              {[
                { cls: "bg-primary", label: "primary" },
                { cls: "bg-secondary", label: "secondary" },
                { cls: "bg-destructive", label: "destructive" },
                { cls: "bg-muted", label: "muted" },
                { cls: "bg-accent", label: "accent" },
                { cls: "bg-card", label: "card" },
                { cls: "bg-background border", label: "background" },
                { cls: "bg-foreground", label: "foreground" },
              ].map(({ cls, label }) => (
                <div key={label} className="space-y-1 text-center">
                  <div className={`${cls} h-10 rounded-md`} />
                  <p className="font-mono text-[10px] text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </Row>
        </Section>

        {/* Tier 2: 피드백 */}
        <Section title="Tier 2 — 피드백" description="사용자 행동에 반응하는 상태 표현">

          <Row label="Alert">
            <div className="w-full space-y-2">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>안내</AlertTitle>
                <AlertDescription>일반 정보를 전달하는 알림입니다.</AlertDescription>
              </Alert>
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>오류</AlertTitle>
                <AlertDescription>문제가 발생했습니다. 다시 시도해주세요.</AlertDescription>
              </Alert>
            </div>
          </Row>

          <Row label="Toast (Sonner)">
            <Button
              variant="outline"
              onClick={() =>
                toast.success("저장되었습니다!", {
                  description: "변경 사항이 성공적으로 저장됐습니다.",
                })
              }
            >
              <CheckCircle className="mr-2 h-4 w-4" />
              성공 Toast
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                toast.error("저장 실패", {
                  description: "네트워크 오류가 발생했습니다.",
                })
              }
            >
              <AlertCircle className="mr-2 h-4 w-4" />
              오류 Toast
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                toast.info("알림", { description: "새로운 메시지가 있습니다." })
              }
            >
              <Bell className="mr-2 h-4 w-4" />
              정보 Toast
            </Button>
          </Row>

          <Row label="Skeleton (로딩 플레이스홀더)">
            <div className="flex w-full items-center gap-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>
          </Row>

          <Row label="Dialog">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">다이얼로그 열기</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>정말 삭제하시겠습니까?</DialogTitle>
                  <DialogDescription>
                    이 작업은 되돌릴 수 없습니다. 해당 항목이 영구적으로 삭제됩니다.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button variant="outline">취소</Button>
                  <Button variant="destructive" className="gap-2">
                    <Trash2 className="h-4 w-4" />
                    삭제
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </Row>

          <Row label="Tooltip">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <Download className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>파일 다운로드</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <Star className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>즐겨찾기에 추가</TooltipContent>
            </Tooltip>
          </Row>
        </Section>

        {/* Tier 3: 입력 */}
        <Section title="Tier 3 — 입력" description="폼의 핵심 구성요소">
          <Card>
            <CardHeader>
              <CardTitle>프로필 수정</CardTitle>
              <CardDescription>기본 정보를 입력해주세요.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">이름</Label>
                  <Input id="name" placeholder="홍길동" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">이메일</Label>
                  <Input id="email" type="email" placeholder="hong@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">역할</Label>
                <Select>
                  <SelectTrigger id="role">
                    <SelectValue placeholder="역할을 선택하세요" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">관리자</SelectItem>
                    <SelectItem value="editor">편집자</SelectItem>
                    <SelectItem value="viewer">뷰어</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">소개</Label>
                <Textarea
                  id="bio"
                  placeholder="간단한 자기소개를 입력하세요..."
                  rows={3}
                />
              </div>
              <Separator />
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="notifications">이메일 알림</Label>
                    <p className="text-xs text-muted-foreground">
                      새 메시지를 이메일로 받습니다
                    </p>
                  </div>
                  <Switch
                    id="notifications"
                    checked={switchOn}
                    onCheckedChange={setSwitchOn}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="terms"
                    checked={checked}
                    onCheckedChange={(v) => setChecked(!!v)}
                  />
                  <Label htmlFor="terms" className="font-normal">
                    이용약관에 동의합니다
                  </Label>
                </div>
              </div>
            </CardContent>
            <CardFooter className="gap-2">
              <Button onClick={() => toast.success("프로필이 저장됐습니다.")}>
                저장
              </Button>
              <Button variant="outline">취소</Button>
            </CardFooter>
          </Card>
        </Section>

        {/* Tier 4: 표시 */}
        <Section title="Tier 4 — 표시" description="정보를 보여주는 컨테이너">

          <Row label="Avatar">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.jpg" />
              <AvatarFallback>KS</AvatarFallback>
            </Avatar>
            <Avatar className="h-10 w-10">
              <AvatarFallback>LY</AvatarFallback>
            </Avatar>
            <Avatar className="h-12 w-12">
              <AvatarFallback>PM</AvatarFallback>
            </Avatar>
          </Row>

          <Row label="Stat Card">
            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { label: "총 사용자", value: "2,847", delta: "+12.5%" },
                { label: "월 매출", value: "₩4.2M", delta: "+8.3%" },
                { label: "활성 세션", value: "142", delta: "현재 온라인" },
              ].map((stat) => (
                <Card key={stat.label}>
                  <CardHeader className="pb-2">
                    <CardDescription>{stat.label}</CardDescription>
                    <CardTitle className="text-3xl">{stat.value}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground !mt-0">{stat.delta}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Row>

          <Row label="Tabs + Table">
            <div className="w-full">
              <Tabs defaultValue="all">
                <TabsList>
                  <TabsTrigger value="all">전체</TabsTrigger>
                  <TabsTrigger value="active">활성</TabsTrigger>
                  <TabsTrigger value="inactive">비활성</TabsTrigger>
                </TabsList>
                <TabsContent value="all">
                  <Table>
                    <TableCaption>사용자 목록</TableCaption>
                    <TableHeader>
                      <TableRow>
                        <TableHead>이름</TableHead>
                        <TableHead>이메일</TableHead>
                        <TableHead>역할</TableHead>
                        <TableHead>상태</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {TABLE_DATA.map((row) => (
                        <TableRow key={row.id}>
                          <TableCell className="font-medium">
                            <div className="flex items-center gap-2">
                              <Avatar className="h-7 w-7">
                                <AvatarFallback className="text-xs">
                                  {row.name[0]}
                                </AvatarFallback>
                              </Avatar>
                              {row.name}
                            </div>
                          </TableCell>
                          <TableCell className="text-muted-foreground">
                            {row.email}
                          </TableCell>
                          <TableCell>{row.role}</TableCell>
                          <TableCell>
                            <Badge
                              variant={row.status === "활성" ? "default" : "secondary"}
                            >
                              {row.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TabsContent>
                <TabsContent value="active">
                  <p className="py-4 text-sm text-muted-foreground">
                    활성 사용자만 표시됩니다.
                  </p>
                </TabsContent>
                <TabsContent value="inactive">
                  <p className="py-4 text-sm text-muted-foreground">
                    비활성 사용자만 표시됩니다.
                  </p>
                </TabsContent>
              </Tabs>
            </div>
          </Row>

          <Row label="Accordion">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>이 스타터킷에 포함된 것은 무엇인가요?</AccordionTrigger>
                <AccordionContent>
                  Next.js 15 App Router, TypeScript, TailwindCSS v4, ShadcnUI 컴포넌트,
                  레이아웃 시스템, 다크모드, 폼·알림 라이브러리가 포함되어 있습니다.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>다크모드는 어떻게 동작하나요?</AccordionTrigger>
                <AccordionContent>
                  next-themes 라이브러리로 라이트·다크·시스템 모드를 지원합니다.
                  헤더 우측의 테마 버튼으로 전환할 수 있습니다.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>추가 컴포넌트는 어떻게 설치하나요?</AccordionTrigger>
                <AccordionContent>
                  <code>npx shadcn add [컴포넌트명]</code> 명령어로 필요한 컴포넌트를
                  추가할 수 있습니다.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Row>
        </Section>

        {/* Tier 5: 네비게이션 */}
        <Section title="Tier 5 — 네비게이션" description="페이지 간·섹션 간 이동">

          <Row label="Breadcrumb">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">홈</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/posts">게시글</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>게시글 상세</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </Row>

          <Row label="Dropdown Menu">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">액션 메뉴</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>작업</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="gap-2">
                  <Download className="h-4 w-4" />
                  내보내기
                </DropdownMenuItem>
                <DropdownMenuItem className="gap-2">
                  <Star className="h-4 w-4" />
                  즐겨찾기
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="gap-2 text-destructive focus:text-destructive">
                  <Trash2 className="h-4 w-4" />
                  삭제
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </Row>

          <Row label="Pagination">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </Row>
        </Section>

        {/* 다크모드 */}
        <Section
          title="다크모드 테마"
          description="라이트 · 다크 · 시스템 모드를 지원합니다"
        >
          <Row label="테마 전환">
            <Button
              variant="outline"
              className="gap-2"
              onClick={() => {
                setTheme("light");
                toast.success("라이트 모드로 변경됐습니다.");
              }}
            >
              <Sun className="h-4 w-4" />
              라이트
            </Button>
            <Button
              variant="outline"
              className="gap-2"
              onClick={() => {
                setTheme("dark");
                toast.success("다크 모드로 변경됐습니다.");
              }}
            >
              <Moon className="h-4 w-4" />
              다크
            </Button>
            <Button
              variant="outline"
              className="gap-2"
              onClick={() => {
                setTheme("system");
                toast.info("시스템 설정을 따릅니다.");
              }}
            >
              <Monitor className="h-4 w-4" />
              시스템
            </Button>
          </Row>
          <Row label="토큰 미리보기">
            <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                "bg-background",
                "bg-card",
                "bg-primary",
                "bg-muted",
              ].map((cls) => (
                <div key={cls} className={`${cls} rounded-lg border p-4 text-center`}>
                  <p className="font-mono text-xs text-muted-foreground">{cls}</p>
                </div>
              ))}
            </div>
          </Row>
        </Section>

      </div>
    </MainLayout>
  );
}
