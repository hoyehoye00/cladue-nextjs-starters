import { MainLayout } from "@/components/layout/main-layout";

export default function BoardPage() {
  return (
    <MainLayout>
      <div className="mx-auto max-w-4xl space-y-8">
        <div>
          <h1>게시판</h1>
          <p className="text-muted-foreground">
            게시판 페이지입니다.
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
