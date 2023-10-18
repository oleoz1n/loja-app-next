import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Camisa() {
  return (
    <div className="p-4">
      <h1>Camisa</h1>
      <div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore,
          esse distinctio, dicta rem consectetur architecto nobis perferendis
          enim, ullam autem ratione saepe aperiam. In corrupti ipsa sint
          incidunt nam necessitatibus.
        </p>
        <figure>
          <Image
            src="https://th.bing.com/th/id/OIP.RixapMiXPDH53twooKZR-gHaHa?pid=ImgDet&rs=1"
            alt="Camisa"
            width={300}
            height={300}
          />
        </figure>
        <Link
          href="/"
          className="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-24"
        >
          Voltar...
        </Link>
      </div>
    </div>
  );
}
