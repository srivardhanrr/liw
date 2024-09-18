<!-- src/routes/courses/student/+page.svelte -->
<script>
	import CourseRegistrationForm from '$lib/components/sections/courses/CourseRegistrationForm.svelte';
    import { fade } from 'svelte/transition';

    export let form;
  
    const courseCategories = [
      {
        name: "Leadership and Management",
        courses: [
          "Budgets and Financial Reports",
          "Crisis Management",
          "Developing New Managers",
          "Developing Emotional Intelligence",
          "Leadership and Influence",
          "Self-Leadership"
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
          "Personal Productivity",
          "Public Speaking",
          "Social Intelligence",
          "Stress Management",
          "Taking Initiative"
        ]
      },
      {
        name: "Marketing and Sales",
        courses: [
          "Internet Marketing Fundamentals",
          "Marketing Basics",
          "Media and Public Relations",
          "Overcoming Sales Objections",
          "Presentation Skills",
          "Proposal Writing",
          "Sales Fundamentals",
          "Social Media Marketing",
          "Top 10 Sales Secrets"
        ]
      },
      {
        name: "Human Resources",
        courses: [
          "Health and Wellness at Work"
        ]
      },
      {
        name: "Organizational Essentials",
        courses: [
          "Cyber Security",
          "Developing Corporate Behavior",
          "Handling a Difficult Customer/Parent",
          "Risk Assessment and Management",
          "Teamwork and Team Building"
        ]
      },
      {
        name: "Administrative Skills",
        courses: [
          "Basic Bookkeeping",
          "Business Writing",
          "Creating a Great Webinar",
          "Organizational Skills",
          "Social Media in the Workplace",
          "Supply Chain Management",
          "Telephone Etiquette"
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
          "Entrepreneurship",
          "Interpersonal Skills",
          "mLearning Essentials",
          "Negotiation Skills",
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
          "Creativity: Thinking Outside the Box",
          "Developing a Lunch and Learn",
          "Developing Emotional Intelligence",
          "Diversity and Inclusion",
          "Emotional Intelligence at Work",
          "Event Planning",
          "Increasing Your Happiness",
          "Job Search Skills",
          "Leadership Development for Women",
          "Life Coaching Essentials",
          "Managing Personal Finances",
          "Multi-Level Marketing",
          "Office Health and Safety",
          "Sensitivity Training",
          "Social Media in the Workplace",
          "Time Management",
          "Trust Building and Resilience",
          "Unconscious Bias",
          "Universal Safety Practices",
          "Virtual Team Building and Management",
          "Women in Leadership"
        ]
      }
    ];
  </script>
  
  <div class="bg-white min-h-screen">
    <div class="container mx-auto px-4 py-16">
      <h1 class="font-playfair text-4xl md:text-5xl text-brand-burgundy mb-8">Student Training Program</h1>
      <p class="font-bricolage text-xl text-brand-dark mb-12">Empower yourself with essential skills for academic and professional success through our comprehensive Student Training Program.</p>
      
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