import SpotifyCard from "./SpotifyCard";
import GitHubCard from "./GithubCard";
import ProfileCard from "./ProfileCard";
import TimeCard from "./TimeCard";
import Tools from "./Tools";

function Profile() {
  return (
    <>
      <div className="flex flex-wrap md:flex-nowrap items-start w-full space-x-2">
        <div className="flex flex-col flex-[2.5] w-full md:w-auto space-y-2 overflow-hidden">
          <TimeCard />
          <ProfileCard />
        </div>
        <div className="flex flex-col flex-[1] w-full md:w-auto space-y-4 overflow-hidden">
          <SpotifyCard />
          <GitHubCard />
        </div>
      </div>

      <Tools />

      <div className="bg-white rounded-lg p-0 overflow-hidden h-24 relative">
        <img
          src="\working.gif"
          alt="Pixel Animation"
          className="w-full h-full object-cover -mt"
        />
      </div>
      <div className="text-center text-gray-500 text-sm">
        © 2025 Archer Shane Bigornia. All rights reserved.
      </div>
    </>
  );
}

export default Profile;
