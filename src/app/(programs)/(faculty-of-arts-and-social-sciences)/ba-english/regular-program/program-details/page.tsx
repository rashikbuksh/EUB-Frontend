import React from 'react';

import Title from '@/components/title';

import ContentWrapper from '@/app/(programs)/_components/content-wrapper';
import PerformanceCriteriaTable from '@/app/(programs)/_components/performance-criteria-table';
import UgcGradingTable from '@/app/(programs)/_components/ugc-grading-table';

const ProgramDetails = () => {
  return (
    <ContentWrapper title='Program Details' className='space-y-8'>
      <p>
        The BA (Honours) in English at the European University of Bangladesh is
        a broad-based, multidisciplinary program designed to equip graduates
        with the skills needed to meet the demands of a rapidly evolving
        society. The curriculum is structured around foundational courses that
        broaden students’ perspectives, along with support courses that enhance
        their understanding of core subjects. This four-year, full-time day
        program consists of 12 regular terms, requiring students to complete 40
        courses totaling 120 credit hours. Students will receive letter grades
        for their coursework, while the Comprehensive Examination and thesis
        work will be graded on a pass/fail basis.
      </p>

      <div>
        <Title variant={'title'} title='Semesters' />
        <p>
          The program comprises 12 semesters (trimesters), each spanning four
          months. Of these, 11 semesters are dedicated to coursework, while the
          final semester is reserved for an internship or project. The academic
          year is structured into three semesters: Spring, Summer, and Fall.
        </p>

        <ul className='mt-2 list-disc space-y-1.5 pl-6'>
          <li className='space-x-1'>
            <strong>Spring semester:</strong> <span>January to April</span>
          </li>
          <li className='space-x-1'>
            <strong>Summer semester:</strong> <span>May to August</span>
          </li>
          <li className='space-x-1'>
            <strong>Fall semester:</strong> <span>September to December</span>
          </li>
        </ul>
      </div>

      <div>
        <Title variant={'title'} title='Duration' />
        <p>Duration of the program is 4 years (12 Semesters).</p>
      </div>
      <div>
        <Title variant={'title'} title='Credit Hour' />
        <p>
          The program comprises 132 credits, including a 3-credit
          internship/project.
        </p>
      </div>
      <div>
        <Title variant={'title'} title='Course Load' />
        <p>
          In each semester, students are required to complete four courses,
          totaling 12 credits. In the 12th semester, they must undertake a
          3-credit internship/project along with a 1-credit Applied Research
          Methodology course.
        </p>
      </div>
      <div>
        <Title variant={'title'} title='Performance Evaluation Criterion' />
        <p className='mb-4'>
          The final grade for each course will be determined based on
          students&apos; performance in class attendance, continuous assessment
          (including class tests, assignments, presentations, etc.), midterm
          examination, and final examination as outlined below.
        </p>

        <PerformanceCriteriaTable />

        <div className='mt-8'>
          <p className='mb-4'>
            The university will comply with the uniform grading system suggested
            by UGC as follows.
          </p>
          <UgcGradingTable />
          <p className='mt-4'>
            Incomplete (I) Grade: An Incomplete (I) grade is used in special
            circumstances. An ‘I’ grade may be given only at the end of a
            semester to a student who has completed all other requirements
            except the final examination.
          </p>
        </div>
      </div>

      <div>
        <Title variant={'title'} title='Tuition Fee Structure' />
        <p>(Refer to the Admission Office, EUB)</p>
      </div>
    </ContentWrapper>
  );
};

export default ProgramDetails;
