# Custom Resumes Folder

This folder contains customized versions of your resume tailored for specific job applications.

## Structure

**Each job application gets its own folder:**
- `CompanyName_PositionTitle/` - Contains all files for that application
  - `job_posting.md` - Original job posting
  - `analysis.md` - AI analysis of requirements
  - `resume.md` - Customized resume (Markdown)
  - `resume.html` - Customized resume (HTML for PDF)
  - `resume.pdf` - Final PDF (not tracked in git)
  - `notes.md` - Discussion notes and revisions

**Example:**
```
resumes/
├── AcmeCorp_SeniorSoftwareEngineer/
│   ├── job_posting.md
│   ├── analysis.md
│   ├── resume.md
│   ├── resume.html
│   └── notes.md
└── TechStartup_EngineeringManager/
    └── ...
```

## Workflow: Job Posting Analysis & Resume Creation

### Step 1: Add Job Posting
1. Create a new folder: `resumes/CompanyName_PositionTitle/`
2. Copy `JOB_POSTING_TEMPLATE.md` into that folder as `job_posting.md`
3. Fill in the job posting details
4. Ask me to analyze it

### Step 2: AI Analysis
I'll analyze the job posting and create:
- `analysis.md` - Detailed breakdown of requirements and how your experience matches
- `resume.md` - Customized resume tailored to the role
- `resume.html` - HTML version ready for PDF generation

### Step 3: Review & Refine
- We can discuss the customized resume
- Make adjustments as needed
- Finalize before you apply

### Step 4: Generate PDF
1. Open `resume.html` in browser
2. Print to PDF (Ctrl+P, Save as PDF)
3. Save as `resume.pdf` in the job folder

### Step 5: Track Application
- Update `APPLICATION_TRACKER.md` with this application
- Note which resume version you used

## Best Practices

### 1. Customize for Each Application

**Key things to tailor:**
- **Job Title Alignment**: Match your experience to their job title requirements
- **Keywords**: Use keywords from the job description in your resume
- **Relevant Experience**: Emphasize experiences most relevant to the specific role
- **Skills Section**: Reorder skills to match job requirements
- **Summary/Objective**: Customize to match the role's focus

### 2. What to Emphasize

**For Engineering Roles:**
- Proton Accelerator project (leadership, technical depth)
- Electronics engineering experience
- Systems integration
- Project management

**For Software Development Roles:**
- Modern web applications (React, Supabase, Vercel)
- AI-enhanced development
- Full-stack development experience
- Daily coding on multiple projects

**For Management/Leadership Roles:**
- Team leadership (10 electricians, racing teams)
- Fleet management
- Project management (ground-up installations)
- Operations management

**For Racing/Technical Roles:**
- Trackside engineering
- Data analysis and strategy
- Team operations
- Technical troubleshooting

**For Remote Work Emphasizing:**
- Self-sufficiency
- Team collaboration
- Multi-project management
- Results-driven work style

### 3. Template Files

- `RESUME_TEMPLATE.md` - Base template for customizing
- `RESUME_TEMPLATE_HTML.html` - HTML version for PDF generation

### 4. Quick Customization Checklist

- [ ] Read job description carefully
- [ ] Identify top 3-5 requirements
- [ ] Match your experience to their needs
- [ ] Update summary/objective section
- [ ] Reorder skills to match job requirements
- [ ] Emphasize relevant projects
- [ ] Adjust experience descriptions to highlight relevant aspects
- [ ] Save with descriptive filename
- [ ] Generate PDF from HTML version

### 5. ATS (Applicant Tracking System) Tips

- Use standard section headings (Experience, Skills, Education)
- Include keywords from job description
- Use standard date formats
- Avoid complex formatting in PDFs
- Keep file size reasonable
- Use standard fonts

### 6. Version Control

- Keep track of which resume you sent to which company
- Note dates of applications
- Track which version got responses
- Learn what works best for different types of roles

## Example Filenames

```
resumes/
├── Remote_Software_Engineer_AcmeCorp_2025-11-03.pdf
├── Engineering_Manager_TechStartup_2025-11-03.pdf
├── Trackside_Engineer_RacingTeam_2025-11-03.pdf
├── Full_Stack_Developer_WebAgency_2025-11-03.pdf
└── Technical_Consultant_Freelance_2025-11-03.pdf
```

## Generating PDFs

1. Open `RESUME_TEMPLATE_HTML.html` in browser
2. Customize for the specific job
3. Print to PDF (Ctrl+P, Save as PDF)
4. Save to this folder with descriptive filename

## Quick Reference

**Base Resume Files:**
- `../RESUME.md` - Main resume in Markdown
- `../RESUME_HTML.html` - HTML version for PDF
- `../PJ_Losey_Resume.pdf` - Current standard resume

**Your Website:**
- https://pjlosey.com - Online resume/portfolio

