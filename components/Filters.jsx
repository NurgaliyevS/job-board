export const CATEGORIES = [
  "Admin & Leadership",
  "Botany",
  "Ecology",
  "Environmental Education",
  "Fisheries",
  "Forestry",
  "Hydrology",
  "Land Trust",
  "Marine Biology",
  "General / Stewardship",
  "Policy And Law",
  "Outdoor Recreation",
  "Restoration",
  "Sustainability",
  "Wildlife",
];

export const JOB_TYPES = [
  "AmeriCorps",
  "Paid Internship",
  "Permanent",
  "Student / postdoc",
  "Temporary",
  "Unpaid",
];

export default function Icon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
      ></path>
    </svg>
  );
}