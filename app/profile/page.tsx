import React from "react";

export default function ProfilePage() {
  return (
    <main className="profile-page" style={{ padding: "2rem" }}>
      <h1>โปรไฟล์นักศึกษา</h1>
      <section style={{ marginBottom: "2rem" }}>
        <h2>นายอภิวิชญ์ บุญตา</h2>
        <ul>
          <li><b>รหัสนักศึกษา:</b> 65109837</li>
          <li><b>สาขาวิชา:</b> วิศวคอมพิวเตอร์และปัญญาประดิษฐ์</li>
          <li><b>คณะ:</b> คณะวิศวกรรมศาสตร์</li>
          <li><b>ความสนใจ:</b> การพัฒนาโปรแกรม, ปัญญาประดิษฐ์, การเขียนเว็บ</li>
        </ul>
      </section>
      <section>
        <h2>นางสาวขนิษฐา ศรีขวัญ</h2>
        <ul>
          <li><b>รหัสนักศึกษา:</b> 65110678</li>
          <li><b>สาขาวิชา:</b> วิศวคอมพิวเตอร์และปัญญาประดิษฐ์</li>
          <li><b>คณะ:</b> คณะวิศวกรรมศาสตร์</li>
          <li><b>ความสนใจ:</b> การออกแบบระบบ, การประมวลผลข้อมูล, ปัญญาประดิษฐ์</li>
        </ul>
      </section>
    </main>
  );
}
