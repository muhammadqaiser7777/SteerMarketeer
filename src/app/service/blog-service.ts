// blog.service.ts
import { Injectable } from '@angular/core';

export interface Blog {
  id: number;
  title: string;
  date: string;
  snippet: string;
  content: string;
  image: string;
}

@Injectable({ providedIn: 'root' })
export class BlogService {
  blogs: Blog[] = [
    {
      id: 1,
      title: 'The Role of Lead Generation in Affiliate Marketing',
      date: 'March 5, 2025',
      snippet: 'Lead generation plays a crucial role in affiliate marketing, serving as the backbone of successful campaigns...',
      content: `
        <h3>1. Understanding Lead Generation in Affiliate Marketing</h3>
        <p>Lead generation involves attracting and capturing the interest of potential customers...</p>
        <div class="step-image">
          <img src="assets/images/blogs/blog-1.1.jpg" alt="Lead Generation" />
        </div>

        <h3>2. The Connection Between Leads and Conversions</h3>
        <p>Not all leads are created equal. The quality of leads directly impacts conversion rates...</p>
        <div class="step-image">
          <img src="assets/images/blogs/blog-1.2.jpg" alt="Conversions" />
        </div>

        <h3>3. Effective Strategies for High-Quality Lead Generation</h3>
        <ul>
          <li><b>Targeted Marketing:</b> Using data-driven insights to reach the right audience.</li>
          <li><b>Optimized Landing Pages:</b> Creating compelling pages that encourage action.</li>
          <li><b>Retargeting Campaigns:</b> Re-engaging potential leads who didn’t convert initially.</li>
          <li><b>Email Nurturing Sequences:</b> Building trust and guiding leads through the sales funnel.</li>
        </ul>
        <div class="step-image">
          <img src="assets/images/blogs/blog-1.3.jpg" alt="Lead Strategies" />
        </div>

        <h3>4. The Long-Term Impact of Strong Lead Generation</h3>
        <p>Consistent lead generation fuels long-term growth for both affiliates and advertisers...</p>
        <div class="step-image">
          <img src="assets/images/blogs/blog-1.4.jpg" alt="Long-Term Impact" />
        </div>

        <h3>Final Thoughts</h3>
        <p>Lead generation is the foundation of affiliate marketing success...</p>
      `,
      image: 'assets/images/blogs/blog-1.jpg'
    },
    {
      id: 2,
      title: 'How Leads Are Converted to Sales – The Journey from Click to Conversion',
      date: 'January 31, 2025',
      snippet: 'In the world of digital marketing, generating leads is just the first step. The real challenge lies in converting those leads into actual sales...',
      content: `
        <h3>1. Engaging & Nurturing the Leads</h3>
        <ul>
          <li>📞 <b>Follow-up Calls:</b> Professional sales teams or affiliates reach out quickly.</li>
          <li>📩 <b>Personalized Messaging:</b> Tailored communication builds trust.</li>
          <li>⏳ <b>Timely Response:</b> The faster the outreach, the higher the conversion chances.</li>
        </ul>
        <p><i>💡 Pro Tip: Calling a lead within 5 minutes increases closing chances by 400%!</i></p>
        <div class="step-image">
          <img src="assets/images/blogs/blog-2.1.jpg" alt="Lead Engagement" />
        </div>

        <h3>2. Qualifying the Leads for Sales</h3>
        <ul>
          <li>🔹 <b>Interest Level:</b> Are they browsing or ready to buy?</li>
          <li>🔹 <b>Budget & Fit:</b> Can they afford the product/service?</li>
          <li>🔹 <b>Timeline:</b> When do they plan to decide?</li>
        </ul>
        <p><i>💡 Pro Tip: Use CRM tools to track and segment leads by readiness.</i></p>
        <div class="step-image">
          <img src="assets/images/blogs/blog-2.2.jpg" alt="Lead Qualification" />
        </div>

        <h3>3. Closing the Deal – Turning a Lead into a Sale</h3>
        <ul>
          <li>✅ <b>Personalized Sales Pitches:</b> Tailored to the lead’s needs.</li>
          <li>✅ <b>Overcoming Objections:</b> Addressing concerns confidently.</li>
          <li>✅ <b>Offering Incentives:</b> Discounts, free trials, or bonuses.</li>
        </ul>
        <p><i>💡 Pro Tip: Multiple follow-ups increase conversion chances by 80%!</i></p>
        <div class="step-image">
          <img src="assets/images/blogs/blog-2.3.jpg" alt="Closing Deals" />
        </div>

        <h3>Final Thoughts</h3>
        <p>Converting leads into sales requires strategy, persistence, and the right funnel...</p>
      `,
      image: 'assets/images/blogs/blog-2.jpg'
    },
    {
      id: 3,
      title: 'High EPC vs. High Payout – Which One Should You Focus On?',
      date: 'January 29, 2024',
      snippet: 'When running affiliate campaigns, two key metrics often determine success: EPC (Earnings Per Click) and Payouts...',
      content: `
        <h3>What is EPC (Earnings Per Click)?</h3>
        <p>EPC measures how much you earn per click on an offer...</p>
        <div class="step-image">
          <img src="assets/images/blogs/blog-3.1.jpg" alt="EPC Explained" />
        </div>

        <h3>What is a High Payout?</h3>
        <p>A high payout means more money per conversion, but doesn’t guarantee high earnings...</p>
        <div class="step-image">
          <img src="assets/images/blogs/blog-3.2.jpg" alt="High Payout" />
        </div>

        <h3>High EPC vs. High Payout – Which One Wins?</h3>
        <table>
          <tr><th>Factor</th><th>High EPC</th><th>High Payout</th></tr>
          <tr><td>Conversion Rate</td><td>✅ High</td><td>❌ Low</td></tr>
          <tr><td>Stability</td><td>✅ Reliable</td><td>❌ Fluctuates</td></tr>
          <tr><td>Profitability</td><td>✅ Consistent</td><td>❌ Risky</td></tr>
        </table>
        <div class="step-image">
          <img src="assets/images/blogs/blog-3.3.jpg" alt="EPC vs Payout Comparison" />
        </div>

        <h3>Final Thoughts</h3>
        <p>High EPC usually means better conversions and long-term success...</p>
      `,
      image: 'assets/images/blogs/blog-3.jpg'
    },
    {
      id: 4,
      title: 'What Makes a Lead High-Quality?',
      date: 'January 29, 2024',
      snippet: 'Generating leads is easy, but generating high-quality leads that actually convert into paying customers is the real challenge...',
      content: `
        <h3>1. Clear Intent to Purchase</h3>
        <p>A good lead shows active buying signals...</p>
        <div class="step-image">
          <img src="assets/images/blogs/blog-4.1.jpg" alt="Intent to Purchase" />
        </div>

        <h3>2. Accurate & Verified Information</h3>
        <p>Correct, verifiable details ensure easy follow-up...</p>
        <div class="step-image">
          <img src="assets/images/blogs/blog-4.2.jpg" alt="Verified Information" />
        </div>

        <h3>3. Demographics & Target Audience Match</h3>
        <p>Leads should fit your ICP (ideal customer profile)...</p>
        <div class="step-image">
          <img src="assets/images/blogs/blog-4.3.jpg" alt="Audience Match" />
        </div>

        <h3>4. Engagement & Interest Level</h3>
        <p>Leads who engage across touchpoints are stronger prospects...</p>
        <div class="step-image">
          <img src="assets/images/blogs/blog-4.4.jpg" alt="Engagement" />
        </div>

        <h3>5. Budget & Decision-Making Power</h3>
        <p>Decision-makers with budgets convert faster...</p>
        <div class="step-image">
          <img src="assets/images/blogs/blog-4.5.jpg" alt="Decision Makers" />
        </div>

        <h3>6. Timely Follow-Up Readiness</h3>
        <p>Quick response leads are more likely to convert...</p>
        <div class="step-image">
          <img src="assets/images/blogs/blog-4.6.jpg" alt="Timely Follow Up" />
        </div>

        <h3>7. Source Credibility & Lead Origin</h3>
        <p>Trusted sources deliver higher-quality leads...</p>
        <div class="step-image">
          <img src="assets/images/blogs/blog-4.7.jpg" alt="Lead Source" />
        </div>

        <h3>Final Thoughts</h3>
        <p>High-quality leads mean better ROI and stronger relationships...</p>
      `,
      image: 'assets/images/blogs/blog-4.jpg'
    },
    {
      id: 5,
      title: 'How to Choose the Best Affiliate Network for Your Business',
      date: 'January 29, 2024',
      snippet: 'Finding the right affiliate network can significantly impact your business’s growth and revenue...',
      content: `
        <h3>1. Understand Your Business Goals</h3>
        <p>Define objectives: brand awareness, lead generation, or sales...</p>
        <div class="step-image">
          <img src="assets/images/blogs/blog-5.1.jpg" alt="Business Goals" />
        </div>

        <h3>2. Evaluate the Commission Structure</h3>
        <p>Choose EPC, CPA, or revenue share based on your model...</p>
        <div class="step-image">
          <img src="assets/images/blogs/blog-5.2.jpg" alt="Commission Structure" />
        </div>

        <h3>3. Analyze the Network’s Reputation</h3>
        <p>Check testimonials, reviews, and case studies...</p>
        <div class="step-image">
          <img src="assets/images/blogs/blog-5.3.jpg" alt="Network Reputation" />
        </div>

        <h3>4. Assess Affiliate Quality and Traffic Sources</h3>
        <p>Ensure affiliates use ethical practices and quality traffic...</p>
        <div class="step-image">
          <img src="assets/images/blogs/blog-5.4.jpg" alt="Affiliate Quality" />
        </div>

        <h3>5. Check Tracking and Reporting Tools</h3>
        <p>Strong analytics are crucial for optimization...</p>
        <div class="step-image">
          <img src="assets/images/blogs/blog-5.5.jpg" alt="Tracking Tools" />
        </div>

        <h3>6. Support and Payment Reliability</h3>
        <p>Reliable payouts and multi-channel support matter...</p>
        <div class="step-image">
          <img src="assets/images/blogs/blog-5.6.jpg" alt="Support & Payment" />
        </div>

        <h3>7. Compliance and Fraud Protection</h3>
        <p>Choose networks with robust fraud prevention...</p>
        <div class="step-image">
          <img src="assets/images/blogs/blog-5.7.jpg" alt="Fraud Protection" />
        </div>

        <h3>8. Network Size and Niche Focus</h3>
        <p>Pick specialized networks for better targeting...</p>
        <div class="step-image">
          <img src="assets/images/blogs/blog-5.8.jpg" alt="Niche Network" />
        </div>

        <h3>Final Thoughts</h3>
        <p>Transparency, quality, and support define the right affiliate network...</p>
      `,
      image: 'assets/images/blogs/blog-5.jpg'
    },
    {
      id: 6,
      title: 'How to Scale Your Affiliate Campaigns for Maximum Profits',
      date: 'January 29, 2024',
      snippet: 'Scaling an affiliate campaign effectively is the key to maximizing revenue while maintaining profitability...',
      content: `
        <h3>1. Optimize and Test Winning Offers</h3>
        <p>Identify top-performing offers and A/B test...</p>
        <div class="step-image">
          <img src="assets/images/blogs/blog-6.1.jpg" alt="Optimize Offers" />
        </div>

        <h3>2. Diversify Traffic Sources</h3>
        <p>Expand with SEO, paid ads, email, and influencers...</p>
        <div class="step-image">
          <img src="assets/images/blogs/blog-6.2.jpg" alt="Diversify Traffic" />
        </div>

        <h3>3. Increase Budget Strategically</h3>
        <p>Scale spending gradually while monitoring KPIs...</p>
        <div class="step-image">
          <img src="assets/images/blogs/blog-6.3.jpg" alt="Budget Scaling" />
        </div>

        <h3>Final Thoughts</h3>
        <p>Scaling requires balance between growth and profitability...</p>
      `,
      image: 'assets/images/blogs/blog-6.jpg'
    }
  ];

  getBlogs() {
    return this.blogs;
  }

  getBlogById(id: number) {
    return this.blogs.find(b => b.id === id);
  }
}
