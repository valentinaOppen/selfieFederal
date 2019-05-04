<?php

class Images {

    function base64_to_jpeg($b64, $output_file) {
        $output_file .= rand(1, 1000000).'.jpg';
        $output_file = './images/'. $output_file;
        try {
            //code...
            if (base64_encode(base64_decode($b64, true)) !== $b64) {
                return false;
            }

            $content = base64_decode($b64);
            $file = fopen("$output_file", "wb");
            $res = fwrite($file, $content);
            fclose($file);
            if (!$res) return false;
            return $output_file;
        } catch (\Throwable $th) {
            //throw $th;
            return false;
        }
    }
}