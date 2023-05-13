class UploadController {
    /**
     *
     * @param {import("express").Request} req
     * @param {import("express").Response} res
     */
    upload(req, res) {
        console.log(req.file);

        res.sendStatus(200);
    }
}

export default new UploadController();
