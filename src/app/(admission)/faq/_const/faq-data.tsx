import Link from 'next/link';



import { IFAQ } from '@/types';





const faqData: IFAQ[] = [
  {
    question: 'What programs does EUB offer?',
    answer: (
      <div className='space-y-4'>
        <div>
          <p className='text-lg'>
            <strong>Faculty of Business Administration</strong>
          </p>
          <ul className='mt-1 list-disc space-y-1 pl-8'>
            <li>Bachelor of Business Administration</li>
            <li>Master of Business Administration</li>
            <li>Master of Business Administration (1 Year Program)</li>
            <li>Executive Master of Business Administration</li>
            <li>Bachelor of Tourism and Hospitality Management</li>
          </ul>
        </div>
        <div>
          <p className='text-lg'>
            <strong>Faculty of Arts and Social Sciences</strong>
          </p>
          <ul className='mt-1 list-disc space-y-1 pl-8'>
            <li>Bachelor of Arts (Honors) in English</li>
            <li>Master of Arts (Final) in English</li>
            <li>Bachelor of Social Sciences in Economics</li>
            <li>Master of Social Sciences in Economics</li>
            <li>Bachelor of Laws (LL.B. Honors)</li>
            <li>Master of Laws (LL.M.)</li>
          </ul>
        </div>
        <div>
          <p className='text-lg'>
            <strong>Faculty of Engineering</strong>
          </p>
          <ul className='mt-1 list-disc space-y-1 pl-8'>
            <li>Bachelor of Civil Engineering</li>
            <li>Bachelor of Textile Engineering</li>
            <li>Bachelor of Computer Science Engineering</li>
            <li>Bachelor of Electrical and Electronics Engineering</li>
            <li>Bachelor of Industrial Production Engineering</li>
            <li>Bachelor of Mechanical Engineering</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    question:
      'What are the minimum qualifications for Undergraduate Admission?',
    answer: (
      <div className='space-y-4'>
        <div>
          <p className='text-lg'>
            <strong>Minimum Academic Qualifications</strong>
          </p>
          <ul className='list-inside list-decimal space-y-3'>
            <span className='italic'>
              The admission eligibility for undergraduate, graduate and Diploma
              level at private Universities approved by UGC is determined as
              follows:
            </span>
            <br />
            <li>
              Private Universities shall not advertise admission or admission to
              any program or course other than the program or course approved by
              the University Grants Commission.
            </li>
            <li>
              A candidate must have a minimum GPA 2.50 or equivalent grade in
              each SSC or equivalent examination and HSC examinations or
              equivalent examination. If there is a minimum GPA 2.00 in any of
              these two examinations, the candidate must have a total GPA 6.00
              in both examinations.
            </li>
            <li>
              The candidate must have minimum 5 Subjects in O-Level and 2
              subjects in A-Level examinations with minimum grade of B (GPA 4.00
              ) in 4 subjects and of C (GPA 3.50) in 3 subjects of 7 subjects in
              both the examinations.
            </li>
            <li>
              Offspring of the freedom fighters may apply with an aggregate GPA
              of 5.00 in SSC/SSC(Vocational)/Dakhil and HSC/Alim or equivalent.
            </li>
            <li>
              For the programs or courses titled Music, Fashion Design, Fine
              Arts, Graphics Design, Library Science & Information Technology,
              the candidate should have a minimum of GPA 2.00 in SSC/O-Level and
              HSC/A or equivalent public examinations at each level.
            </li>
            <li>
              Students with a science background in SSC/SSC(Vocational)/Dakhil,
              HSC/Alim or equivalent examinations are only allowed to get
              admission in the programs/courses at the Bachelor’s (BSc),
              Master’s (MSc) and Diploma level under the Faculty of Science and
              Technology. Students who passed from Arts, Humanities and Business
              background are not allowed to get admission in B.Sc., MSc and
              Diploma programs.
            </li>
            <li>
              Students having a GED Diploma degree will not be eligible for
              admission to the Private Universities.
            </li>
            <li>
              Students seeking admission to the Masters programs must have a GPA
              2.00 or equivalent at Bachelor program having the above mentioned
              educational qualifications.
            </li>
            <br />
            <span className='italic'>
              It is, therefore, directed to admit the students in the approved
              programs/courses of the commission at the private universities
              subject to the educational qualifications mentioned above. At the
              same time, the commissions office circular regarding the admission
              policy of the students issued on 10 April 2016 (Office Memo
              no.3010) has been cancelled.
            </span>
            <br />
            <br />
            The Admission Committee looks for individuals who want to learn in
            any suitable course(s). Students who want to learn are encouraged to
            enroll.
          </ul>
        </div>
        <div>
          {/* <p className='text-lg'>
            <strong>Specific Program Requirements</strong>
          </p>
          <ul className='mt-1 list-disc space-y-1 pl-8'>
            <li>
              For <strong>B.A. (Honors) in English Program</strong>, minimum 2nd
              division or CGPA of 2.5 in SSC/Dakhil and HSC/Alim, O-Level: CGPA
              of 2.00 in five subjects; A-Level: CGPA of 2.0 in two subjects,
              minimum 45% marks in English at the SSC/HSC level. Students with a
              gap in studies or post-school qualifications (Diplomas, Advanced
              Diplomas) may receive credit recognition.
            </li>
            <li>
              For all <strong>Engineering Programs</strong> of the School of
              Engineering & Physical Sciences, candidates
              <ul className='list-decimal pl-8'>
                <li>
                  Must pass SSC and HSC in Science with at least a 2nd division
                  in both, OR
                </li>
                <li>
                  Math & Physics with a minimum C and E grade respectively in
                  A-Levels, OR
                </li>
                <li>
                  Math and Physics with a minimum C grade in O-Levels AND must
                  have Math or Physics with a minimum C grade in A-Levels to be
                  eligible to apply. Math and Physics with a minimum C grade in
                  O-Levels AND must have Math or Physics with a minimum C grade
                  in A-Levels to be eligible to apply.
                </li>
              </ul>
            </li>
          </ul> */}
        </div>
      </div>
    ),
  },
  {
    question: 'What are the minimum qualifications for Postgraduate Admission?',
    answer: (
      <div className='space-y-4'>
        <div>
          <p className='text-lg'>
            <strong>Postgraduate Program Requirements</strong>
          </p>
          <ul className='mt-1 list-disc space-y-1 pl-8'>
            <li>
              <strong>MBA Program</strong>

              <ul className='mt-1 list-decimal space-y-1 pl-8'>
                <li>
                  A bachelor’s degree from a recognized university is required.
                </li>
                <li>
                  For the <strong>EMBA Program</strong>, work experience in an
                  executive position is preferred.
                </li>
              </ul>
            </li>
            <li>
              <strong>M.A. in English</strong>

              <ul className='mt-1 list-decimal space-y-1 pl-8'>
                <li>
                  B.A. (Honors) in English or completion of M.A. (Preliminary)
                  in English required.
                </li>
              </ul>
            </li>
            <li>
              <strong>Master of Laws (LL.M.)</strong>

              <ul className='mt-1 list-decimal space-y-1 pl-8'>
                <li>
                  LL.B. (Honors) degree or completion of LL.M. (Preliminary)
                  required.
                </li>
              </ul>
            </li>
            <li>
              <strong>M.S.S. in Economics</strong>

              <ul className='mt-1 list-decimal space-y-1 pl-8'>
                <li>
                  Four-year B.S.S. (Honors) in Economics students can join
                  directly at the Final Year Level.
                </li>
                <li>
                  Three-year B.S.S. (Honors) or B.A. (Pass) degree holders must
                  complete the two-year MSS program.
                </li>
                <li>
                  Students with a study gap of over two years must undertake the
                  full two-year MSS program.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    question: 'From where can the prospective students get the admission form?',
    answer: (
      <>
        Candidate has to fill up the application form online. It is advisable
        for the candidate to have a signature and picture scanned copy before
        applying. For online application click{' '}
        <Link
          target='_blank'
          className='text-primary underline'
          href={'/online-admission'}
        >
          here
        </Link>
        .
      </>
    ),
  },
  {
    question: 'What are the admission, tuition, and other fees?',
    answer: (
      <>
        <p>
          Admission Fee: <strong>Tk. 10,000</strong> (non-refundable).
          <br />
          See{' '}
          <Link
            target='_blank'
            className='text-primary underline'
            href={'/financial-information'}
          >
            Financial Information
          </Link>{' '}
          for more details.
        </p>
      </>
    ),
  },
  // {
  //   question: 'How many subjects can I enroll in a semester?',
  //   answer: (
  //     <p>
  //       Students typically take a minimum of 15 credits (5 courses) and a
  //       maximum of 27 credits (9 courses) per semester. However, this depends on
  //       the department and the student’s CGPA.
  //     </p>
  //   ),
  // },
  {
    question: 'What should I do to get financial aid or a scholarship?',
    answer: (
      <p>
        Financial aid and scholarships are awarded based on academic merit. For
        more details, visit:{' '}
        <Link
          target='_blank'
          className='text-primary underline'
          href={'/financial-information'}
        >
          Financial Information
        </Link>
      </p>
    ),
  },
  {
    question:
      'Can I take admission before my HSC or A-Level result is published?',
    answer: (
      <p>
        Candidates can apply before their HSC/A-Level result is published.
        However, the result must be provided before completing the admission
        process.
      </p>
    ),
  },
  {
    question: `I've submitted the application form. Now I want to change the program. What will be the procedure?`,
    answer: (
      <p>
        Candidates must email the Admissions Office of EUB with their name and
        details about the new program they wish to select.
      </p>
    ),
  },
  {
    question: 'Which program should I choose at EUB?',
    answer: (
      <p>
        It completely depends on the student’s interests. EUB prioritizes all
        programs equally. All faculty members have completed their Masters from
        esteemed institutions.
      </p>
    ),
  },
  {
    question: 'When will my original certificates be verified?',
    answer: (
      <p>
        During the verification process, candidates must provide the original
        copies of SSC & HSC or &apos;O&apos; & &apos;A&apos; level results for
        verification.
      </p>
    ),
  },
  {
    question:
      'What will be my career path after completing an undergraduate program at European University of Bangladesh?',
    answer: (
      <p>
        Graduates from EUB are academically qualified to face challenges in
        their professional lives.
      </p>
    ),
  },
  {
    question: 'How can I get admission information about EUB?',
    answer: (
      <p>
        <strong>
          Admission Office : 01968774931, 01968774933, 01896066056
          <br />
          <br />
          Email : admission@eub.edu.bd
        </strong>
        <br />
        <br />
        Admission information is available on the EUB admission website:{' '}
        <Link
          target='_blank'
          className='text-primary underline'
          href={'/admission-information'}
        >
          Admission Information.
        </Link>
        <br />
        <br />
        Candidate has to fill up the application form online. It is advisable
        for the candidate to have a signature and picture scanned copy before
        applying. For online application click
        {'   '}
        <Link
          target='_blank'
          className='text-primary underline'
          href={'/online-admission'}
        >
          Online Admission
        </Link>
      </p>
    ),
  },
  {
    question:
      'What should I do if I face problems with the application submission?',
    answer: (
      <p>
        <strong>
          Admission Office : 01968774931, 01968774933, 01896066056
          <br />
          <br />
          Email : admission@eub.edu.bd
        </strong>
        <br />
        <br />
        Admission information is available on the EUB admission website:{' '}
        <Link
          target='_blank'
          className='text-primary underline'
          href={'/admission-information'}
        >
          Admission Information.
        </Link>
      </p>
    ),
  },
  {
    question: 'How to pay the admission form fee after applying?',
    answer: (
      <p>
        Admission information is available on the EUB admission website:{' '}
        <Link
          target='_blank'
          className='text-primary underline'
          href={'/admission-information'}
        >
          Admission Information.
        </Link>
        <br />
        <br />
        Admission fees can be paid through bKash on this number: 01628-747-488.
      </p>
    ),
  },
  {
    question:
      'I made a mistake while filling out the admission form. What should I do?',
    answer: (
      <p>
        Candidates must email the Admissions Office of EUB with their name and
        details to get assistance.
      </p>
    ),
  },
  {
    question: 'What should I bring during the verification process?',
    answer: (
      <>
        Candidates must bring the following original documents along with
        photocopies:
        <ul className='mt-1 list-disc space-y-1 pl-8'>
          <li>
            SSC & HSC or &apos;O&apos; & &apos;A&apos; level result documents
            (certificates and mark sheets)
          </li>
          <li>HSC registration card and/or passport</li>
          <li>National ID (if available)</li>
          <li>
            Two passport-sized photographs of the candidate and one
            passport-sized photograph of each parent
          </li>
          <li>Photocopies of parents&apos; National ID or passport</li>
        </ul>
      </>
    ),
  },
  {
    question: 'How many years of study gap does EUB accept?',
    answer: (
      <ul className='mt-1 list-disc space-y-1 pl-8'>
        <li>
          <strong>General programs:</strong> Study gaps exceeding 5 years are
          not accepted.
        </li>
        <li>
          <strong>LL.B.:</strong> Study gaps exceeding 2 years are not accepted.
        </li>
      </ul>
    ),
  },
  {
    question: 'What should a fresher bring for advising (course registration)?',
    answer: (
      <p>
        Freshers must bring their offer letter and bank slip for advising
        (course registration).
      </p>
    ),
  },
];

export default faqData;