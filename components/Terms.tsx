import React from "react";

const Terms = () => {
  return (
    <div className="px-4 pb-20" style={{ backgroundColor: "#0B2F1F" }}>
      <div className="middle mt-10 flex flex-col gap-5 max-w-4xl mx-auto">
        {/* top title */}
        <div className="flex select-none flex-col gap-2">
          <div className="text-sm font-semibold tracking-widest text-white/40">
            TOS
          </div>
          <div className="flex flex-col text-4xl font-semibold sm:text-[55px] sm:leading-[68px] text-white">
            <span>Terms & Conditions</span>
          </div>
          <div className="flex w-full flex-row items-center">
            <div className="h-[1px] w-full bg-white/20"></div>
            <div className="mx-2 min-w-max text-sm text-white/60">Last Updated : 04-25-2026</div>
            <div className="h-[1px] w-[20px] bg-white/20"></div>
          </div>
        </div>

        {/* Agreement */}
        <Container>
          <SubHeading>Agreement</SubHeading>
          <Paragraph>
            By purchasing, the buyer fully agrees to all terms listed below without exception.
          </Paragraph>
        </Container>

        {/* Decoration Terms */}
        <Container>
          <SubHeading>Decoration Terms</SubHeading>
          <Points>Verify Before Claiming - All buyers must carefully check the decoration name and preview link before claiming.</Points>
          <Points>Claim Time Limit - All gift links must be claimed within 47 hours of delivery. After this period, the server is not responsible for unclaimed, expired, or invalid gifts.</Points>
          <Points>Final After Claim - Once a decoration is claimed, redeemed, or applied, no changes, exchanges, or refunds will be issued.</Points>
          <Points>Wrong Decoration Policy - If a decoration received is not the agreed item, notify an Admin or Stocker immediately.</Points>
          <Points>Do Not Claim Incorrect Items - If the decoration is incorrect, do not claim it under any circumstances.</Points>
          <Points>Admin-Only Changes - Decoration changes are handled only by an Admin or Stocker and only if reported before claiming.</Points>
          <Points>Buyer Responsibility - Failure to verify the decoration link or claim within the given time will be treated as buyer negligence. The server will not be held responsible.</Points>
        </Container>

        {/* General Store Terms */}
        <Container>
          <SubHeading>General Store Terms & Conditions</SubHeading>
          
          <SubSubHeading>1) Refunds</SubSubHeading>
          <Paragraph>No refunds, only replacements.</Paragraph>

          <SubSubHeading>2) Warranty</SubSubHeading>
          <Paragraph>Warranty durations depend on the product:</Paragraph>
          <Points>Spotify Premium: 1 week</Points>
          <Points>Minecraft Accounts: 1 week</Points>
          <Points>YouTube / Prime Video / Canva / CapCut Pro FA / ChatGPT / Apple Music (FA accounts): 3 days</Points>
          <Points>Gemini Pro + Google AI Pro 2TB: 3 months</Points>
          <Points>Nitro: 1 hour</Points>

          <SubSubHeading>3) Verification for Replacements</SubSubHeading>
          <Points>To replace Nitro tokens, promo codes, or Microsoft, a previous recording must be provided showing the code arrived and was invalid.</Points>
          <Points>If your PayPal is blocked or limited after purchase, no refund or replacement will be issued.</Points>

          <SubSubHeading>4) Usage & Conduct</SubSubHeading>
          <Points>No warranty on Nitro tokens or Spotify in case of mass revokes ("wave revoke").</Points>
          <Points>If FA account credentials are changed, replacement rights are lost.</Points>
          <Points>If our supplier scams us, refunds/replacements cannot be processed.</Points>
          <Points>If a staff member is banned from the team, they lose staff payment. If banned a second time, the immunity pack becomes invalid.</Points>
          <Points>If our PayPal gets blocked, no refunds or replacements will be issued.</Points>
          <Points>No warranty for "Suppliers Contacts."</Points>
          <Points>Purchasing = full acceptance of all terms.</Points>

          <SubSubHeading>5) Limitations</SubSubHeading>
          <Paragraph>All products are for educational purposes only. We are not responsible for buyer misuse or illegal actions.</Paragraph>

          <SubSubHeading>6) Changes to Terms</SubSubHeading>
          <Paragraph>We may update these terms at any time. Continued use or purchases mean you accept the latest version.</Paragraph>

          <SubSubHeading>7) Liability</SubSubHeading>
          <Paragraph>If you own any of the services we sell and want them removed, you may request removal and it will be taken down.</Paragraph>
        </Container>

        <Container>
          <div className="text-white/50 italic text-base leading-relaxed">
            Disclaimer: This website is in no way affiliated with, authorized, maintained, sponsored or endorsed by Discord Inc. (discord.com) or any of its affiliates or subsidiaries.
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Terms;

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col gap-4">{children}</div>;
};

const Paragraph = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-base text-white/80 leading-relaxed">{children}</div>;
};

const Points = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="ml-5 flex flex-row items-start gap-3">
      <div className="h-2 w-2 min-h-2 min-w-2 max-h-2 max-w-2 rounded-full mt-2" style={{ background: "linear-gradient(135deg, #34A350, #1a5228)" }} />
      <div className="text-base text-white/70">{children}</div>
    </div>
  );
};

const SubHeading = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-2xl font-semibold text-white mt-6 mb-2">{children}</div>;
};

const SubSubHeading = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-lg font-semibold text-white/90 mt-4 mb-2">{children}</div>;
};
