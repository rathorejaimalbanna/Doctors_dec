import Image from "next/image";
import React from "react";
import styles from "./components.module.css"
import Link from "next/link";

export default function Category() {
  return (
    <div className={styles.category} >
      <Link href="Cardiologist/cardio">
        <Image src="/images/cardiologist.png" width={240} height={240} />
        <h2 style={{marginTop:"15px"}}>Cardiologist</h2>
      </Link>
      <div>
        <Link href="Dentist/dental">
        <Image src="/images/dentist.png" width={240} height={240} />
        <h2 style={{marginTop:"15px"}}>Dentist</h2>
        </Link>
      </div>
      <div>
        <Link href="ENT_speclist/ear_nose_throat" >
        <Image src="/images/ent.png" width={240} height={240} />
        <h2 style={{marginTop:"15px"}}>ENT</h2>
        </Link>
      </div>
      <div>
        <Link href="Orthopaedist/bone_related">
        <Image src="/images/orthopedic.png" width={240} height={240} />
        <h2 style={{marginTop:"15px"}}>Orthopaedic</h2>
        </Link>
      </div>
      <div>
        <Link href="Psycologist/mental">
        <Image src="/images/psycology.png" width={240} height={240} />
        <h2 style={{marginTop:"15px"}}>Psycology</h2>
        </Link>
      </div>
      <div>
        <Link href="Surgeon/operations_and">
        <Image src="/images/surgeon.png" width={240} height={240} />
        <h2 style={{marginTop:"15px"}}>Surgon</h2>
        </Link>
      </div>
    </div>
  );
}
