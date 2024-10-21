import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="flex h-screen w-full items-center justify-center bg-[#F1F5FB]">
      <SignIn
        appearance={{
          variables: {
            colorPrimary: "#005BAC",
            colorText: "#003366",
            colorBackground: "#F8F9FA",
            colorInputBackground: "#E0E7ED",
            colorInputText: "#333333",
          },
          layout: {
            socialButtonsVariant: "iconButton",
            logoImageUrl: "/icons/logo.svg",
          },
        }}
      />
    </main>
  );
}
