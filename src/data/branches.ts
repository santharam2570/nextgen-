export type Branch = {
  slug: string;
  city: string;
  name: string;
  address: string[];
  landmark?: string;
  postalCode?: string;
  phones: string[];
  emails: string[];
  mapQuery: string;
};

export const branches: Branch[] = [
  {
    slug: "coimbatore",
    city: "Coimbatore",
    name: "NextGen Innovations Coimbatore",
    address: ["Nextgen Innovations,", "Tech Park Road,", "Coimbatore, Tamil Nadu, India"],
    phones: ["+91 95978 81959"],
    emails: ["info@nextgeninnovations.co.in", "official.nextgeninnovations@gmail.com"],
    mapQuery: "Nextgen Innovations, Tech Park Road, Coimbatore, Tamil Nadu",
  },
  {
    slug: "trichy",
    city: "Trichy",
    name: "NextGen Innovations Trichy",
    address: [
      "New Street, 6/75E, Williams Rd,",
      "Othakadai, Cantonment,",
      "Tiruchirappalli, Tamil Nadu 620001",
    ],
    landmark: "Plus Code: RM3P+JM Tiruchirappalli",
    postalCode: "620001",
    phones: ["+91 99527 73417"],
    emails: ["info@nextgeninnovations.co.in"],
    mapQuery: "RM3P+JM Tiruchirappalli, Tamil Nadu",
  },
];

export const branchAddress = (b: Branch) => b.address.join(" ").replace(/,$/, "");

export const mapEmbedUrl = (query: string) =>
  `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;

export const mapDirectionsUrl = (query: string) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`;
