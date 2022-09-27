import HomeContainer from "~/components/home";
import ImpactText from "~/components/home/Impact";
import SocialBar from "~/components/home/SocialBar";

export default function Index() {
  return (
    <HomeContainer>
      <ImpactText />
      <SocialBar />
    </HomeContainer>

  );
}
