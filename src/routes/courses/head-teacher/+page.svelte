<!-- src/routes/courses/head-teacher/+page.svelte -->
<script>
	import CourseRegistrationForm from '$lib/components/sections/courses/CourseRegistrationForm.svelte';
  import { fade } from 'svelte/transition';

  export let form;

  const courseCategories = [
    {
      name: "Leadership and Management",
      courses: [
        "Coaching and Mentoring",
        "Conducting Annual Employee Reviews",
        "Crisis Management",
        "Developing New Managers",
        "Developing Emotional Intelligence",
        "Employee Motivation",
        "Leadership and Influence",
        "Lean Six Sigma",
        "Manager Management",
        "Performance Management",
        "Self-Leadership",
        "Servant Leadership"
      ]
    },
    {
      name: "Personal Development",
      courses: [
        "Critical Thinking",
        "Emotional Intelligence",
        "Goal Setting and Getting Things Done",
        "Improving Mindfulness",
        "Improving Self-Awareness",
        "Managing Workplace Anxiety",
        "Personal Productivity",
        "Public Speaking",
        "Stress Management",
        "Work-Life Balance"
      ]
    },
    {
      name: "Marketing and Sales",
      courses: [
        "Presentation Skills",
        "Proposal Writing"
      ]
    },
    {
      name: "Human Resources",
      courses: [
        "Business Succession Planning",
        "Generation Gaps",
        "Health and Wellness at Work",
        "Hiring Strategies",
        "Human Resource Management",
        "Talent Management",
        "Workplace Harassment"
      ]
    },
    {
      name: "Organizational Essentials",
      courses: [
        "Appreciative Inquiry",
        "Change Management",
        "Conflict Resolution",
        "Delivering Constructive Criticism",
        "Risk Assessment and Management",
        "Teamwork and Team Building"
      ]
    },
    {
      name: "Administrative Skills",
      courses: [
        "Administrative Office Procedures",
        "Administrative Support",
        "Archiving and Records Management",
        "Creating a Great Webinar",
        "Employee Recognition",
        "Meeting Management",
        "Organizational Skills",
        "Social Media in the Workplace"
      ]
    },
    {
      name: "Professional Advancement",
      courses: [
        "Assertiveness and Self-Confidence",
        "Body Language Basics",
        "Communication Strategies",
        "Creative Problem Solving",
        "Developing Creativity",
        "Digital Citizenship",
        "Interpersonal Skills",
        "mLearning Essentials",
        "Personal Branding",
        "Project Management",
        "Ten Soft Skills You Need",
        "The Cloud and Business"
      ]
    },
    {
      name: "Advanced Career Building",
      courses: [
        "Accountability in the Workplace",
        "Adult Learning – Mental Skills",
        "Adult Learning – Physical Skills",
        "Anger Management",
        "Building Confidence and Assertiveness",
        "Civility in the Workplace",
        "Creativity: Thinking Outside the Box",
        "Developing a Lunch and Learn",
        "Developing Emotional Intelligence",
        "Diversity and Inclusion",
        "Emotional Intelligence at Work",
        "Event Planning",
        "Increasing Your Happiness",
        "Leadership Development for Women",
        "Life Coaching Essentials",
        "Managing Personal Finances",
        "Managing Workplace Harassment",
        "Office Health and Safety",
        "Respect in the Workplace",
        "Recognizing Employee Excellence",
        "Responsibility in the Workplace",
        "Safety in the Workplace",
        "Sensitivity Training",
        "Social Media in the Workplace",
        "Supervising Others",
        "Time Management",
        "Trust Building and Resilience",
        "Unconscious Bias",
        "Universal Safety Practices",
        "Virtual Team Building and Management",
        "Women in Leadership",
        "Workplace Bullying",
        "Workplace Diversity",
        "Workplace Violence"
      ]
    }
  ];
</script>

<div class="bg-white min-h-screen">
  <div class="container mx-auto px-4 py-16">
    <h1 class="font-playfair text-4xl md:text-5xl text-brand-burgundy mb-8">Head Teacher Training Program</h1>
    <p class="font-bricolage text-xl text-brand-dark mb-12">Enhance your leadership skills and educational management expertise with our comprehensive Head Teacher Training Program.</p>
    
    {#each courseCategories as category}
      <section class="mb-16" transition:fade>
        <h2 class="font-playfair text-3xl text-brand-burgundy mb-6">{category.name}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {#each category.courses as course}
            <div class="bg-white border border-brand-gold rounded-lg p-4 shadow-md transition-all duration-300 hover:shadow-lg">
              <h3 class="font-bricolage text-lg text-brand-yellow">{course}</h3>
            </div>
          {/each}
        </div>
      </section>
    {/each}
  </div>
</div>
<CourseRegistrationForm form={form} />