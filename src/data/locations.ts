export type Location = {
  slug: string;
  name: string;
  branch: "coimbatore" | "trichy";
  intro: string;
  audience: string;
};

export const locations: Location[] = [
  {
    slug: "gandhipuram",
    name: "Gandhipuram",
    branch: "coimbatore",
    intro:
      "Gandhipuram is one of Coimbatore's busiest hubs, with bus connections across the city. Learners from Gandhipuram can attend classroom sessions at our Coimbatore branch and switch to live online classes whenever needed.",
    audience: "Ideal for students and job seekers around Gandhipuram looking for practical, placement-focused training.",
  },
  {
    slug: "peelamedu",
    name: "Peelamedu",
    branch: "coimbatore",
    intro:
      "With engineering colleges and IT companies around Peelamedu and Avinashi Road, demand for SAP, cloud and software skills is high. Learners from Peelamedu can join our Coimbatore classroom batches or attend live online.",
    audience: "A good fit for engineering students and IT professionals in Peelamedu targeting SAP, cloud, DevOps and testing roles.",
  },
  {
    slug: "rs-puram",
    name: "RS Puram",
    branch: "coimbatore",
    intro:
      "Students and career-switchers from RS Puram can join weekday and weekend classroom batches at our Coimbatore branch, or learn online with the same trainers, real-time projects and placement assistance.",
    audience: "Popular with commerce, finance and arts graduates in RS Puram looking to move into IT and SAP careers.",
  },
  {
    slug: "saravanampatti",
    name: "Saravanampatti",
    branch: "coimbatore",
    intro:
      "Saravanampatti is home to many of Coimbatore's IT parks and colleges. Professionals and students from the area can upskill through our weekend and fast-track batches in Coimbatore or attend live online classes before or after work.",
    audience: "Designed for working professionals and final-year students in Saravanampatti aiming for a role change or their first IT job.",
  },
  {
    slug: "cantonment",
    name: "Cantonment",
    branch: "trichy",
    intro:
      "Our Trichy branch is on Williams Road in Cantonment, so learners in and around Cantonment can attend classroom sessions with ease and switch to online classes whenever needed.",
    audience: "Ideal for students and working professionals in Cantonment and the Trichy Central area.",
  },
  {
    slug: "thillai-nagar",
    name: "Thillai Nagar",
    branch: "trichy",
    intro:
      "Learners from Thillai Nagar can reach our Trichy branch for weekday and weekend classroom batches. Prefer to study from home? Join the same course live online with recorded sessions on our app.",
    audience: "Popular with freshers and retail, finance and commerce professionals from Thillai Nagar looking to move into IT and SAP careers.",
  },
  {
    slug: "srirangam",
    name: "Srirangam",
    branch: "trichy",
    intro:
      "Students and professionals from Srirangam can choose classroom training at our Trichy branch or attend live online sessions, with recordings available on the NextGen app.",
    audience: "Suited for graduates and career-gap candidates in Srirangam who want a structured path back into the job market.",
  },
  {
    slug: "kk-nagar",
    name: "K.K. Nagar",
    branch: "trichy",
    intro:
      "Learners from K.K. Nagar can attend practical, mentor-led classroom training at our Trichy branch with placement support, or join the same batches live online.",
    audience: "A good fit for college students and job seekers in K.K. Nagar who want hands-on training close to home.",
  },
];
