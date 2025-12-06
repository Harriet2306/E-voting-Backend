/**
 * Maps a student's program code/name to their respective Faculty/School.
 * Based on the official University structure:
 * 
 * 1. Faculty of Agricultural Sciences
 * 2. Faculty of Engineering, Design & Technology
 * 3. Faculty of Public Health, Nursing & Midwifery
 * 
 * 4. School of Business and Administration
 * 5. School of Education
 * 6. School of Law
 * 7. School of Medicine
 * 8. School of Dentistry
 * 9. School of Social Sciences
 * 10. Bishop Tucker School of Divinity & Theology
 * 11. School of Journalism, Media & Communication
 * 
 * @param {string} program - The program string from the voter's CSV record
 * @returns {string} - The standardized Faculty name
 */
exports.getFacultyFromProgram = (program) => {
    if (!program) return 'Unknown';

    const p = program.toLowerCase();

    // 1. Faculty of Agricultural Sciences
    if (p.includes('agricultural') || p.includes('agriculture')) {
        return 'Faculty of Agricultural Sciences';
    }

    // 2. Faculty of Engineering, Design & Technology (Computing, Engineering, Visual Arts)
    if (p.includes('computing') || p.includes('computer') || p.includes('technology') ||
        p.includes('engineering') || p.includes('visual arts') || p.includes('design')) {
        return 'Faculty of Engineering, Design & Technology';
    }

    // 3. Faculty of Public Health, Nursing & Midwifery
    if (p.includes('nursing') || p.includes('maternal') || p.includes('public health') || p.includes('midwifery')) {
        return 'Faculty of Public Health, Nursing & Midwifery';
    }

    // 4. School of Business and Administration
    if (p.includes('business') || p.includes('administration') || p.includes('accounting') ||
        p.includes('finance') || p.includes('human resource') || p.includes('procurement') ||
        p.includes('logistics') || p.includes('marketing') || p.includes('commerce') || p.includes('economics')) {
        return 'School of Business and Administration';
    }

    // 5. School of Education
    if (p.includes('education') || p.includes('languages') || p.includes('literature') || p.includes('honors college')) {
        return 'School of Education';
    }

    // 6. School of Law
    if (p.includes('law')) {
        return 'School of Law';
    }

    // 7. School of Medicine
    if (p.includes('medicine') && !p.includes('veterinary')) {
        return 'School of Medicine';
    }

    // 8. School of Dentistry
    if (p.includes('dentistry') || p.includes('dental')) {
        return 'School of Dentistry';
    }

    // 9. School of Social Sciences
    if (p.includes('social work') || p.includes('social administration') ||
        p.includes('governance') || p.includes('international relations') ||
        p.includes('human rights') || p.includes('peace') ||
        p.includes('public administration')) {
        return 'School of Social Sciences';
    }

    // 10. Bishop Tucker School of Divinity & Theology
    if (p.includes('divinity') || p.includes('theology')) {
        return 'Bishop Tucker School of Divinity & Theology';
    }

    // 11. School of Journalism, Media & Communication
    if (p.includes('journalism') || p.includes('media') || p.includes('communication')) {
        return 'School of Journalism, Media & Communication';
    }

    return 'General'; // Fallback
};
