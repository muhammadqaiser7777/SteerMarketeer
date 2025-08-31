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
        <table class="blog-table">
          <tr><th>Factor</th><th>High EPC</th><th>High Payout</th></tr>
          <tr><td>Conversion Rate</td><td>✅ High</td><td>❌ Low</td></tr>
          <tr><td>Stability</td><td>✅ Reliable</td><td>❌ Fluctuates</td></tr>
          <tr><td>Profitability</td><td>✅ Consistent</td><td>❌ Risky</td></tr>
        </table>

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
    },

    // ---------------- New Blogs (7–12) ----------------
    {
      id: 7,
      title: 'Why CPL (Cost-Per-Lead) Works Best for Home Improvement & Solar',
      date: 'February 10, 2025',
      snippet: 'CPL campaigns are one of the most reliable models for industries like home improvement and solar energy...',
      content: `
        <h3>1. Predictable ROI with CPL</h3>
        <p>In CPL campaigns, advertisers pay only when a valid lead is generated...</p>
        <div class="step-image"><img src="assets/images/blogs/blog-1.1.jpg" alt="CPL ROI" /></div>

        <h3>2. Why Home Improvement & Solar Fit CPL</h3>
        <ul>
          <li>🏡 <b>High Ticket Items:</b> Big projects justify lead-based campaigns.</li>
          <li>☀️ <b>Targeted Audiences:</b> Consumers actively searching for solar/home solutions.</li>
          <li>📊 <b>Scalable Model:</b> Predictable and performance-driven.</li>
        </ul>
        <div class="step-image"><img src="assets/images/blogs/blog-1.2.jpg" alt="Home Improvement CPL" /></div>

        <h3>Final Thoughts</h3>
        <p>CPL ensures advertisers spend wisely while affiliates earn consistently...</p>
      `,
      image: 'assets/images/blogs/blog-1.jpg'
    },
    {
      id: 8,
      title: 'Understanding TCPA Compliance in Lead Generation',
      date: 'February 15, 2025',
      snippet: 'Compliance with TCPA is crucial in lead generation to avoid legal risks and ensure consumer trust...',
      content: `
        <h3>1. What is TCPA?</h3>
        <p>The Telephone Consumer Protection Act regulates how businesses can contact leads...</p>
        <div class="step-image"><img src="assets/images/blogs/blog-2.1.jpg" alt="TCPA Rules" /></div>

        <h3>2. Key Requirements for Affiliates</h3>
        <ul>
          <li>✅ Clear opt-in consent.</li>
          <li>✅ No auto-dialing without permission.</li>
          <li>✅ Respect “Do Not Call” lists.</li>
        </ul>
        <div class="step-image"><img src="assets/images/blogs/blog-2.2.jpg" alt="TCPA Compliance" /></div>

        <h3>Final Thoughts</h3>
        <p>Strong TCPA compliance builds trust and protects both advertisers and affiliates...</p>
      `,
      image: 'assets/images/blogs/blog-2.jpg'
    },
    {
      id: 9,
      title: 'The Importance of NET 30 Payments in Affiliate Marketing',
      date: 'February 20, 2025',
      snippet: 'Reliable payment terms like NET 30 create trust and long-term partnerships in affiliate marketing...',
      content: `
        <h3>1. What Does NET 30 Mean?</h3>
        <p>NET 30 means affiliates are paid 30 days after invoice, ensuring stable cash flow...</p>
        <div class="step-image"><img src="assets/images/blogs/blog-3.1.jpg" alt="NET30 Explained" /></div>

        <h3>2. Why Affiliates Value NET 30</h3>
        <ul>
          <li>💵 Predictable income stream.</li>
          <li>🤝 Builds trust with networks.</li>
          <li>📈 Encourages scaling campaigns.</li>
        </ul>
        <div class="step-image"><img src="assets/images/blogs/blog-3.2.jpg" alt="Affiliate Payments" /></div>

        <h3>Final Thoughts</h3>
        <p>Timely payments are the backbone of strong affiliate relationships...</p>
      `,
      image: 'assets/images/blogs/blog-3.jpg'
    },
    {
      id: 10,
      title: 'Direct Offers vs Brokered Offers – Why Advertisers Prefer Exclusive Networks',
      date: 'February 25, 2025',
      snippet: 'Direct offers provide advertisers with more control and transparency compared to brokered deals...',
      content: `
        <h3>1. What Are Direct Offers?</h3>
        <p>Direct offers come straight from advertisers, ensuring authenticity...</p>
        <div class="step-image"><img src="assets/images/blogs/blog-4.1.jpg" alt="Direct Offers" /></div>

        <h3>2. Risks of Brokered Offers</h3>
        <p>Brokered offers often involve multiple layers, reducing transparency and margins...</p>
        <div class="step-image"><img src="assets/images/blogs/blog-4.2.jpg" alt="Brokered Offers" /></div>

        <h3>Final Thoughts</h3>
        <p>Advertisers prefer exclusive networks because they deliver higher-quality traffic and better ROI...</p>
      `,
      image: 'assets/images/blogs/blog-4.jpg'
    },
    {
      id: 11,
      title: 'How Real-Time Tracking Helps Affiliates Optimize Faster',
      date: 'March 1, 2025',
      snippet: 'Real-time tracking is a game-changer for affiliates looking to optimize campaigns effectively...',
      content: `
        <h3>1. Why Real-Time Data Matters</h3>
        <p>Instant insights allow quick adjustments to traffic sources and creatives...</p>
        <div class="step-image"><img src="assets/images/blogs/blog-5.1.jpg" alt="Tracking Data" /></div>

        <h3>2. Benefits of Real-Time Tracking</h3>
        <ul>
          <li>⚡ Faster optimization.</li>
          <li>📊 Better budget allocation.</li>
          <li>🚀 Increased conversions.</li>
        </ul>
        <div class="step-image"><img src="assets/images/blogs/blog-5.2.jpg" alt="Real-Time Optimization" /></div>

        <h3>Final Thoughts</h3>
        <p>Real-time tracking empowers affiliates to make data-driven decisions quickly...</p>
      `,
      image: 'assets/images/blogs/blog-5.jpg'
    },
    {
      id: 12,
      title: 'Affiliate Success Stories: Scaling with SteerMarketeer',
      date: 'March 3, 2025',
      snippet: 'See how affiliates scaled their campaigns with SteerMarketeer’s exclusive offers and support...',
      content: `
        <h3>1. From Small Budgets to Big Profits</h3>
        <p>Affiliates who started small scaled campaigns to 6-figure revenues...</p>
        <div class="step-image"><img src="assets/images/blogs/blog-6.1.jpg" alt="Scaling Success" /></div>

        <h3>2. The Role of Network Support</h3>
        <p>SteerMarketeer’s dedicated support team helped affiliates optimize campaigns...</p>
        <div class="step-image"><img src="assets/images/blogs/blog-6.2.jpg" alt="Affiliate Support" /></div>

        <h3>3. Exclusive Direct Offers</h3>
        <p>Direct advertiser relationships ensured higher EPCs and consistent payouts...</p>
        <div class="step-image"><img src="assets/images/blogs/blog-6.3.jpg" alt="Exclusive Offers" /></div>

        <h3>Final Thoughts</h3>
        <p>With the right support and offers, affiliates can scale to new heights...</p>
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
