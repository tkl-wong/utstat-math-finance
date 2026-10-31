import { pastMembersData } from "@/contents/past-members";

const PastMembers = () => {
  return (
    <section className="border-t border-gray-200/70 py-8" id="past-members">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mx-auto mb-6 max-w-3xl text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Past Members
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Former students and postdoctoral researchers affiliated with the Mathematical Finance group.
          </p>
        </div>

        {pastMembersData.length > 0 && (
          <ul className="mx-auto grid max-w-5xl list-disc gap-x-8 gap-y-3 pl-6 marker:text-brand md:grid-cols-2">
            {pastMembersData.map((member) => {
              const profileUrl =
                member.links.website ??
                member.links.linkedin ??
                member.links.googleScholar;

              return (
                <li key={member.name} className="pl-1">
                  {profileUrl ? (
                    <a
                      href={profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-gray-900 underline decoration-gray-300 underline-offset-4 transition-colors hover:text-brand hover:decoration-brand dark:text-white"
                    >
                      {member.name}
                    </a>
                  ) : (
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {member.name}
                    </span>
                  )}
                  <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    {member.title}
                  </p>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
};

export default PastMembers;
