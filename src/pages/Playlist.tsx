import { useParams } from "react-router-dom";
import { members } from "../data/members";

export default function Playlist() {
  const { memberId } = useParams();

  const member = members.find((m) => m.id === memberId);

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        Member not found
      </div>
    );
  }

  const sortSongs = (songs: typeof member.songs) => {
    return [...songs].sort((a, b) => {
      const titleA = a.title;
      const titleB = b.title;
  
      const getType = (str: string) => {
        if (/^[가-힣]/.test(str)) return 0; 
        if (/^[a-zA-Z]/.test(str)) return 1;
        return 2;
      };
  
      const typeA = getType(titleA);
      const typeB = getType(titleB);
  
      if (typeA !== typeB) return typeA - typeB;
  
      if (typeA === 0) {
        return titleA.localeCompare(titleB, "ko");
      }
  
      if (typeA === 1) {
        return titleA.localeCompare(titleB, "en");
      }
  
      return titleA.localeCompare(titleB);
    });
  };

  const sortedSongs = sortSongs(member.songs);
  const half = Math.ceil(member.songs.length / 2);

  const sideA = sortedSongs.slice(0, half);
  const sideB = sortedSongs.slice(half);

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#f7f8fa] text-gray-900">

      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(circle at 30% 20%, ${member.color}30, transparent 55%),
            radial-gradient(circle at 80% 80%, #00000008, transparent 60%),
            linear-gradient(
              rgba(0,0,0,0.015),
              rgba(0,0,0,0.015)
            )
          `,
        }}
      />

      <div
        className="absolute inset-0 z-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: "url(/background/noisy-background.jpg)",
          backgroundRepeat: "repeat",
          backgroundSize: "400px 400px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center px-6 py-16">

        <div className="text-center">

          <h1
            className="text-4xl md:text-5xl font-bold tracking-[0.35em]"
            style={{ color: member.color }}
          >
            {member.name}
          </h1>

          <p className="mt-5 text-xs tracking-[0.4em] text-gray-500">
            PLAYLIST
          </p>

          <div className="mt-8 flex justify-center">
            <img
              src={member.image}
              alt={member.name}
              className="
                w-80 h-80
                object-cover
                border border-black/10
                shadow-xl
              "
            />
          </div>

        </div>

        <div className="mt-10 w-24 h-[1px] bg-black/10" />

        <div
          className="
            mt-12
            w-full
            max-w-5xl
            bg-white/70
            backdrop-blur-sm
            border border-black/5
            rounded-3xl
            shadow-lg
            p-8 md:p-10
          "
        >

          <div className="grid md:grid-cols-2 gap-12">

            <div>

              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-10 h-[1px]"
                  style={{ backgroundColor: member.color }}
                />

                <h2
                  className="text-sm tracking-[0.4em] font-semibold"
                  style={{ color: member.color }}
                >
                  SIDE A
                </h2>
              </div>

              <div className="space-y-4">

                {sideA.map((song, idx) => (
                  <div
                    key={idx}
                    className="
                      flex
                      justify-between
                      items-center
                      border-b
                      border-black/5
                      pb-2
                    "
                  >
                    <div className="flex gap-4">

                      <span className="text-gray-400 w-5">
                        {(idx + 1).toString().padStart(2, "0")}
                      </span>

                      <div>
                        <p className="font-medium">
                          {song.title}
                        </p>

                        <p className="text-sm text-gray-500">
                          {song.artist}
                        </p>
                      </div>

                    </div>

                    <a
                      href={`https://www.youtube.com/results?search_query=${encodeURIComponent(
                        `${song.title} ${song.artist}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        text-xs
                        px-3
                        py-1
                        rounded-md
                        bg-red-500/10
                        hover:bg-red-500/20
                        transition
                      "
                    >
                      YouTube
                    </a>

                  </div>
                ))}

              </div>

            </div>

            <div>

              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-10 h-[1px]"
                  style={{ backgroundColor: member.color }}
                />

                <h2
                  className="text-sm tracking-[0.4em] font-semibold"
                  style={{ color: member.color }}
                >
                  SIDE B
                </h2>
              </div>

              <div className="space-y-4">

                {sideB.map((song, idx) => (
                  <div
                    key={idx}
                    className="
                      flex
                      justify-between
                      items-center
                      border-b
                      border-black/5
                      pb-2
                    "
                  >
                    <div className="flex gap-4">

                      <span className="text-gray-400 w-5">
                        {(idx + 1 + half)
                          .toString()
                          .padStart(2, "0")}
                      </span>

                      <div>
                        <p className="font-medium">
                          {song.title}
                        </p>

                        <p className="text-sm text-gray-500">
                          {song.artist}
                        </p>
                      </div>

                    </div>

                    <a
                      href={`https://www.youtube.com/results?search_query=${encodeURIComponent(
                        `${song.title} ${song.artist}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        text-xs
                        px-3
                        py-1
                        rounded-md
                        bg-red-500/10
                        hover:bg-red-500/20
                        transition
                      "
                    >
                      YouTube
                    </a>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

        <div className="relative mt-20 w-full max-w-5xl">

          <div className="text-center text-[11px] text-gray-400 leading-6 tracking-[0.15em]">
            <p>Designed & Developed by @meong0321</p>
            <p>© 2026 hrtz.archive</p>
          </div>

          <div
            className="
              absolute
              right-3
              bottom-[-20px]
              flex
              flex-col
              items-end
            "
          >
            <div className="flex items-stretch h-14">

              {[
                2,1,3,1,2,1,4,1,2,3,
                1,2,1,3,2,1,4,1,2,1,
                3,1,2,4,1,2,1,3,2,1,
                4,1,2,3,1,2,3,1,2,4,
                1,3,2,1,4,2,1,3,1,2
              ].map((width, idx) => (
                <div
                  key={idx}
                  className="bg-black"
                  style={{
                    width: `${width}px`,
                    marginRight: "1px",
                  }}
                />
              ))}
            </div>

            <p className="mt-2 text-[10px] tracking-[0.25em] text-gray-500">
              HRTZ-ARCHIVE-2026
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}