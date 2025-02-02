import CredentialsProvider from "next-auth/providers/credentials";
const { default: User } = require("@/models/User");
const { verifyPass } = require("@/utils/auth");
const { default: connectDB } = require("@/utils/connectDB");
const { default: NextAuth } = require("next-auth");

export const authOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const { email, password } = credentials;
        console.log(credentials)

        try {
          await connectDB();
        } catch (error) {
          throw new Error("مشکلی در سرور رخ داده است");
        }

        if (!email || !password) throw new Error("اطلاعات معتبر وارد کنید");

        const user = await User.findOne({ email: email });
        const {createdAt} = user

        if (!user) throw new Error("لطفا ابتدا وارد حساب کاربری خود شوید");

        const isValid = verifyPass(password, user.password);

        if (!isValid) throw new Error("نام کاربری یا رمز عبور اشتباه است");
        return { email, createdAt};
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
