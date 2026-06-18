import React, { useEffect } from 'react';

export function TermsOfService() {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-white pb-20 pt-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <h1 className="text-[32px] md:text-[40px] font-bold text-[#3f3b68] mb-6">
          Suggestinfo TERMS OF SERVICE
        </h1>
        
        <h2 className="text-[26px] md:text-[32px] font-bold text-[#3f3b68] mb-6 mt-8">
          1. Terms
        </h2>
        
        <p className="text-[#646e85] text-[15px] leading-relaxed mb-6">
          By accessing the website at <a href="https://suggestinfo.com/" className="text-[#5b52c6] hover:underline" target="_blank" rel="noopener noreferrer">https://suggestinfo.com/</a>, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
        </p>

        <h2 className="text-[26px] md:text-[32px] font-bold text-[#3f3b68] mb-6 mt-8">
          2. Use License
        </h2>

        <div className="text-[#646e85] text-[15px] leading-relaxed mb-6 space-y-4">
          <p>
            <span className="text-[#5b52c6] font-medium mr-1">1.</span> Permission is granted to temporarily download one copy of the materials (information or software) on suggestinfo website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ol className="list-decimal pl-12 space-y-2 marker:text-[#5b52c6]">
            <li>modify or copy the materials;</li>
            <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
            <li>attempt to decompile or reverse engineer any software contained on suggestinfo website;</li>
            <li>remove any copyright or other proprietary notations from the materials; or</li>
            <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
          </ol>
          <p>
            <span className="text-[#5b52c6] font-medium mr-1">2.</span> This license shall automatically terminate if you violate any of these restrictions and may be terminated by suggestinfo at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
          </p>
        </div>

        <h2 className="text-[26px] md:text-[32px] font-bold text-[#3f3b68] mb-6 mt-8">
          3. Disclaimer
        </h2>
        
        <div className="text-[#646e85] text-[15px] leading-relaxed mb-6 space-y-4">
          <p>
            <span className="text-[#5b52c6] font-medium mr-1">1.</span> The materials on suggestinfo website are provided on an 'as is' basis. suggestinfo makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
          <p>
            <span className="text-[#5b52c6] font-medium mr-1">2.</span> Further, suggestinfo does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
          </p>
        </div>

        <h2 className="text-[26px] md:text-[32px] font-bold text-[#3f3b68] mb-6 mt-8">
          4. Limitations
        </h2>

        <p className="text-[#646e85] text-[15px] leading-relaxed mb-6">
          In no event shall suggestinfo or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on suggestinfo website, even if suggestinfo or a suggestinfo authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
        </p>

        <h2 className="text-[26px] md:text-[32px] font-bold text-[#3f3b68] mb-6 mt-8">
          5. Accuracy of materials
        </h2>

        <p className="text-[#646e85] text-[15px] leading-relaxed mb-6">
          The materials appearing on suggestinfo website could include technical, typographical, or photographic errors. suggestinfo does not warrant that any of the materials on its website are accurate, complete or current. suggestinfo may make changes to the materials contained on its website at any time without notice. However suggestinfo does not make any commitment to update the materials.
        </p>

        <h2 className="text-[26px] md:text-[32px] font-bold text-[#3f3b68] mb-6 mt-8">
          6. Links
        </h2>

        <p className="text-[#646e85] text-[15px] leading-relaxed mb-6">
          suggestinfo has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by suggestinfo of the site. Use of any such linked website is at the user's own risk.
        </p>

        <h2 className="text-[26px] md:text-[32px] font-bold text-[#3f3b68] mb-6 mt-8">
          7. Modifications
        </h2>

        <p className="text-[#646e85] text-[15px] leading-relaxed mb-6">
          suggestinfo may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
        </p>

        <h2 className="text-[26px] md:text-[32px] font-bold text-[#3f3b68] mb-6 mt-8">
          8. Governing Law
        </h2>

        <p className="text-[#646e85] text-[15px] leading-relaxed">
          These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
        </p>

      </div>
    </div>
  );
}

export default TermsOfService;
