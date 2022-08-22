import Menu from "~/components/Menu";
import Container from "~/components/Container";
import ImpactText from "~/components/Impact";
import SocialBar from "~/components/SocialBar";


export default function Index() {
  return (
    <Container>
      <Menu />
      <ImpactText />
      <SocialBar />
      <p>Made with 🌻☕🎧 by akadot.</p>
    </Container>
  );
}
