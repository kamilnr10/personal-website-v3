export const getSkills = `
    *[_type == "skill"]
`;

export const getPageInfo = `
*[_type == "pageInfo"][0] {
    ...,
  }
`;

export const getExperience = `
    *[_type == "experience"] {
    ...,
    technologies[]->
  }
`;

export const getProject = `
    *[_type == "project"] {
        ...,
        technologies[]->
    }
`;

export const getSocials = `
    *[_type == "social"]
`;
