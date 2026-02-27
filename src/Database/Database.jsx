export const EXECUTIVES = [
      { name: "Sumaiyyah Fatimah", role: "President", photo: null, batch: "2022", bio: "Leading with vision and dedication.", linkedin: "#", github: "#" },
      { name: "Abdul Ahad", role: "Vice President", photo: null, batch: "2022", bio: "Driving community growth and student initiatives.", linkedin: "#", github: "#" },
      { name: "Tooba Aftab", role: "Director of Operations", photo: null, batch: "2022", bio: "Managing excellence in day-to-day community operations.", linkedin: "#", github: "#" },
      { name: "Abdul Mueed", role: "Co-Director of Operations", photo: null, batch: "2024", bio: "Coordinating success across all department levels.", linkedin: "#", github: "#" },
];

export const TEAMS = {
      tech: {
            name: "Coding & Innovation",
            description: "Building the digital backbone of our community.",
            lead: { name: "Manahil Ejaz", role: "Head", batch: "2022" },
            coleads: [{ name: "Afra Khurram", role: "Co-Head", batch: "2022" },], // Example co-lead
            members: [
                  { name: "John Doe", role: "Member", batch: "2024", linkedin: "#", github: "#" },
                  { name: "Jane Smith", role: "Member", batch: "2024", linkedin: "#", github: "#" },
                  { name: "Ahmad Raza", role: "Member", batch: "2024", linkedin: "#", github: "#" },
                  { name: "Sara Khan", role: "Member", batch: "2023", linkedin: "#", github: "#" },
            ]
      },
      marketing: {
            name: "Co-Operation & Marketing",
            description: "Spreading our mission across the campus and beyond.",
            lead: { name: "Iqra Abid", role: "Head", batch: "2022" },
            coleads: [{ name: "Hooria Ahmed", role: "Co-Head", batch: "2022" },
            { name: "Misbah Ul Hassan", role: "Co-Head", batch: "2022" },],// No co-lead mentioned in your original data
            members: [
                  { name: "Ali Ahmed", role: "Member", batch: "2024", linkedin: "#", github: "#" },
                  { name: "Dua Malik", role: "Member", batch: "2024", linkedin: "#", github: "#" },
            ]
      },
      media: {
            name: "Media",
            description: "Capturing the best moments of our community.",
            lead: { name: "Neha Nauman Khan", role: "Head", batch: "2022" },
            coleads: [{ name: "Fahad Khan", role: "Co-Head", batch: "2022" },
            { name: "Fahad Khan", role: "Co-Head", batch: "2022" },],
            members: [
                  { name: "Hamza Sheikh", role: "Member", batch: "2024", linkedin: "#", github: "#" },
            ]
      },
      publisher: {
            name: "Publisher",
            description: "Crafting and sharing the community's voice through content.",
            lead: { name: "Sidra Faruqi", role: "Head", batch: "2022" },
            coleads: [{ name: "Aima Baig", role: "Co-Head", batch: "2022" },],
            members: [
                  { name: "Hamza Sheikh", role: "Member", batch: "2024", linkedin: "#", github: "#" },
            ]
      }
};

export const STATS = [
  { label: "Members", value: "30+", navigate: "/teams" },
  { label: "Events Held", value: "15+", navigate: "/events" },
  { label: "Years Active", value: "3", navigate: "/about" },
];

export const LEADERSHIP = [
  { name: "Anus Faisal", role: "Founder", photo: null },
  { name: "Safia Faiz", role: "Founder", photo: null },
  { name: "Tahir Ali", role: "Co-Founder", photo: null },
];

export const COMMUNITY = {
  name: "CIS Community",
  university: "NEDUET",
  founded: 2022,
  tagline: "Empowering students through technology, collaboration, and innovation.",
  mission:
    "To create a thriving space where students grow together — by learning, competing, and building real-world skills that go beyond the classroom.",
  vision:
    "To become the leading student-driven tech community at NEDUET, recognized for producing industry-ready graduates and impactful projects.",
  history:
    "Founded in 2022 by a group of passionate CS students at NEDUET, CIS Community started as a small circle of learners who wanted more than just lectures. From our first coding session to hosting university-wide events, we've grown into a community that stands for growth, collaboration, and excellence.",
  logo: "/src/Logo/CIS-Community-Main-Logo.png",
  deptPhoto: "/src/Logo/Dept-pic.png",
};
