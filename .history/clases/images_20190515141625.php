<?php

class Images {

    function base64_to_jpeg($b64, $output_file) {
        
        $output_file .= rand(1, 1000000).'.jpg';
        $output_file = './images/'. $output_file;

        // return $b64;
        try {
            //code...
            if (base64_encode(base64_decode($b64, true)) !== $b64) {
                return false;
            }
            
            $content = base64_decode($b64);
            
            $rr = $this->getType($content);
            return $rr;
            $file = fopen("$output_file", "wb");
            $res = fwrite($file, $content);
            fclose($file);
            if (!$res) return false;
            return $output_file;
        } catch (\Throwable $th) {
            //throw $th;
            return $th;
        }
    }

    function getType($b64) {
        $f = finfo_open();

        $mime_type = finfo_buffer($f, $b64, FILEINFO_MIME_TYPE);
        return explode('/', $mime_type);
    }
}