import Profile from "@/models/Profile"
import DetailsPage from "@/template/DetailsPage"
import connectDB from "@/utils/connectDB"

async function ProfileDetails({ params }) {
  const id = await params

  await connectDB()
  const profile = await Profile.findOne({ _id: id.profileId })

  if (!profile) return <h3>مشکلی پیش آمده</h3>

  return <DetailsPage data={profile} />
}

// export const generateMetadata = async (id.profileId) => {
//   await connectDB()
//   const profile = await Profile.findOne({ _id: id.profileId })

//   return {
//     title: profile.title,
//     description: profile.description,
//     authors: { name: profile.realState },
//     other: { location: "location", city: "Tehran" },
//   }
// }

export default ProfileDetails