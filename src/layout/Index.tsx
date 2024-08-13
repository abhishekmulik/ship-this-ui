import Header from "../components/header/Header";
import MainLayout from "../ui/mainLayout/MainLayout";
import LeftSection from "../components/mainArea/leftSection/LeftSection";
import RightSection from "../components/mainArea/rightSection/RightSection";

function Index() {
  return (
    <div className="w-full h-screen bg-white-100">
      <MainLayout
        header={<Header />}
        firstColumn={
          <>
            <LeftSection />
          </>
        }
        secondColumn={
          <>
            <RightSection />
          </>
        }
      />
    </div>
  );
}

export default Index;
