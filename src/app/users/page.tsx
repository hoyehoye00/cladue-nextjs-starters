import { MainLayout } from "@/components/layout/main-layout";

export default function UsersPage() {
  return (
    <MainLayout>
      <div className="mx-auto max-w-4xl space-y-8">
        <div>
          <h1>사용자 관리</h1>
          <p className="text-muted-foreground">사용자 관리 페이지입니다.</p>
        </div>
      </div>
    </MainLayout>
  );
}
